import { emailRegex } from "@/const/email";
import { db } from "@/libs/db";
import { transporter } from "@/libs/email";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as {
    handover: string;
    email: string;
  };

  if (!body.handover || !body.email) {
    return new NextResponse(
      JSON.stringify({
        error: "Missing parameters",
      }),
      {
        status: 400,
      }
    );
  }

  const emailPassed = emailRegex.test(body.email);

  if (!emailPassed) {
    return new NextResponse(
      JSON.stringify({
        error: "Please enter a valid email address.",
      }),
      {
        status: 400,
      }
    );
  }

  if (!body.email.endsWith("westminster.ac.uk")) {
    return new NextResponse(
      JSON.stringify({
        error:
          "You can only verify with your westminster.ac.uk or my.westminster.ac.uk email address.",
      }),
      {
        status: 400,
      }
    );
  }

  if (!body.email.startsWith("w")) {
    return new NextResponse(
      JSON.stringify({
        error: "Westminster staff accounts are not supported",
      }),
      {
        status: 400,
      }
    );
  }

  const studentId = body.email.split("@")[0].slice(1);

  // Get the handover ID
  const handover = await db.handover.findFirst({
    where: {
      id: body.handover,
    },
    include: {
      DiscordUser: {
        select: {
          username: true,
        },
      },
    },
  });

  if (!handover) {
    return new NextResponse(
      JSON.stringify({
        error: "Handover not found",
      }),
      {
        status: 404,
      }
    );
  }

  if (!handover.discordUserId) {
    return new NextResponse(
      JSON.stringify({
        error: "This interaction doesn't have a Discord account yet.",
      }),
      {
        status: 404,
      }
    );
  }

  let code = Math.floor(100000 + Math.random() * 900000);

  let existingLink = await db.discordUniversity.findFirst({
    where: {
      discordUserId: handover.discordUserId,
    },
    include: {
      emailVerification: true,
    },
  });

  const studentIdWithoutW = body.email.split("@")[0].slice(1).replace("w", "");

  console.log("BEFORE EXISTING LINK");

  if (existingLink) {
    console.log("THIS IS THE EXISTING LINK", existingLink);
    if (existingLink.isExternal) {
      if (existingLink.fullName) {
        return new NextResponse(
          JSON.stringify({
            error: `You can't verify yourself, ${existingLink.fullName}, as you told us you're an external. If this is wrong, please contact uowbo support at tellus@ceccun.com`,
          }),
          {
            status: 403,
          }
        );
      }

      return new NextResponse(
        JSON.stringify({
          error:
            "You can't verify yourself, as you told us you're an external. If this is wrong, please contact uowbo support at tellus@ceccun.com",
        }),
        {
          status: 403,
        }
      );
    }
    if (existingLink.studentId == studentIdWithoutW) {
      if (existingLink.emailVerification) {
        if (existingLink.emailVerification.isVerified) {
          if (existingLink.emailVerification.email == body.email) {
            return new NextResponse(
              JSON.stringify({
                error:
                  "This Discord account is already verified to this email address.",
              }),
              {
                status: 403,
              }
            );
          }
        } else {
          existingLink = await db.discordUniversity.update({
            where: {
              id: existingLink.id,
            },
            data: {
              emailVerification: {
                update: {
                  where: {
                    id: existingLink.emailVerification.id,
                  },
                  data: {
                    email: body.email,
                    isVerified: false,
                  },
                },
              },
              emailCode: code.toString(),
            },
            include: {
              emailVerification: true,
            },
          });
        }
      } else {
        existingLink = await db.discordUniversity.update({
          where: {
            id: existingLink.id,
          },
          data: {
            emailVerification: {
              create: {
                email: body.email,
                isVerified: false,
              },
            },
            emailCode: code.toString(),
          },
          include: {
            emailVerification: true,
          },
        });
      }
    } else if (existingLink.emailVerification) {
      if (!existingLink.emailCode) {
        return new NextResponse(
          JSON.stringify({
            error:
              "There was an error attempting to verify your email address, please contact a member of the uowbo! team.",
          }),
          {
            status: 500,
          }
        );
      }

      if (existingLink.emailVerification.email != body.email) {
        if (!existingLink.emailVerification.isVerified) {
          existingLink = await db.discordUniversity.update({
            where: {
              id: existingLink.id,
            },
            data: {
              emailVerification: {
                update: {
                  where: {
                    id: existingLink.emailVerification.id,
                  },
                  data: {
                    email: body.email,
                    isVerified: false,
                  },
                },
              },
              emailCode: code.toString(),
            },
            include: {
              emailVerification: true,
            },
          });
        }
      } else {
        code = Number.parseInt(existingLink.emailCode);
      }
    } else {
      return new NextResponse(JSON.stringify({ status: "Not valid" }), {
        status: 403,
      });
    }
  } else {
    console.log("COOKING UP EXSITING LINK");

    existingLink = await db.discordUniversity.create({
      data: {
        DiscordUser: {
          connect: {
            id: handover.discordUserId,
          },
        },
        emailCode: code.toString(),
        emailVerification: {
          connectOrCreate: {
            where: {
              email: body.email,
              isVerified: false,
            },
            create: {
              email: body.email,
              isVerified: false,
            },
          },
        },
        isVerified: false,
      },
      include: {
        emailVerification: true,
      },
    });
  }

  if (!existingLink) {
    return new NextResponse(
      JSON.stringify({
        error: "Failed to create link",
      }),
      {
        status: 500,
      }
    );
  }

  const message = `Hey ${handover.DiscordUser?.username},




You're almost there!

To continue linking your account, use the verification code: ${code}



Thanks, uowbo!`;

  const messageHTML = `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title></title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a { padding:0; }
      body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
      table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
      img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
      p { display:block;margin:13px 0; }
    </style>
    <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
    <!--[if lte mso 11]>
    <style type="text/css">
      .mj-outlook-group-fix { width:100% !important; }
    </style>
    <![endif]-->
    
      <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet" type="text/css">
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css?family=Ubuntu:400,700);
@import url(https://fonts.googleapis.com/css?family=Cabin:400,700);
@import url(https://fonts.googleapis.com/css?family=Poppins:400,700);
        </style>
      <!--<![endif]-->

    
    
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }
    </style>
    
  
    <style type="text/css">
    
    
    </style>
    <style type="text/css">
    .hide_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { .hide_on_mobile { display: block !important;} }
        .hide_section_on_mobile { display: none !important;} 
        @media only screen and (min-width: 480px) { 
            .hide_section_on_mobile { 
                display: table !important;
            } 

            div.hide_section_on_mobile { 
                display: block !important;
            }
        }
        .hide_on_desktop { display: block !important;} 
        @media only screen and (min-width: 480px) { .hide_on_desktop { display: none !important;} }
        .hide_section_on_desktop { 
            display: table !important;
            width: 100%;
        } 
        @media only screen and (min-width: 480px) { .hide_section_on_desktop { display: none !important;} }
        
          p, h1, h2, h3 {
              margin: 0px;
          }

          ul, li, ol {
            font-size: 11px;
            font-family: Ubuntu, Helvetica, Arial;
          }

          a {
              text-decoration: none;
              color: inherit;
          }

        @media only screen and (max-width:480px) {
            .mj-column-per-100 { width:100%!important; max-width:100%!important; }.mj-column-per-100 > .mj-column-per-100 { width:100%!important; max-width:100%!important; }
        }
    </style>
    
  </head>
  <body style="word-spacing:normal;background-color:#FFFFFF;">
    
    
      <div style="background-color:#FFFFFF;">
        
      
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    
      
      <div style="margin:0px auto;max-width:600px;">
        
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:9px 0px 9px 0px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
            
      <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
        
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
        <tbody>
          
              <tr>
                <td align="left" style="font-size:0px;padding:15px 15px 15px 15px;word-break:break-word;">
                  
      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1.5;text-align:left;color:#000000;"><p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Poppins, sans-serif;">Hey ${handover.DiscordUser?.username},</span></p>
<p style="font-family: Ubuntu, sans-serif; font-size: 11px;">&nbsp;</p>
<p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Poppins, sans-serif;">You're almost there!</span></p>
<p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Poppins, sans-serif;">To continue linking your account, use the verification code: ${code}</span></p>
<p style="font-family: Ubuntu, sans-serif; font-size: 11px;">&nbsp;</p>
<p style="font-family: Ubuntu, sans-serif; font-size: 11px;"><span style="font-family: Poppins, sans-serif;">Thanks, uowbo!</span></p></div>
    
                </td>
              </tr>

        </tbody>
      </table>
    
      </div>
    
          <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    
      
      <!--[if mso | IE]></td></tr></table><![endif]-->
    
    
      </div>
    
  </body>
</html>
  `;

  await transporter.sendMail({
    from: '"uowbo!" <uowbo@ceccun.com>',
    to: body.email,
    subject: "Continue linking your account",
    text: message,
    html: messageHTML,
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    {
      status: 200,
    }
  );
};

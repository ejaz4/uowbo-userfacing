"use client";
import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { DiscordDisplay } from "@/app/_components/profileDisplay/discord";
import { useHelperCode } from "@/app/verify/libs/useHelperCode";
import { ChevronRight, ShieldCheckIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const HelpExternalPage = () => {
  const [code, setCode] = useState("");
  const [submittedcode, setSubmittedCode] = useState("");
  const claimeeDetails = useHelperCode(submittedcode);
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [error, setError] = useState("");

  const submit = async () => {
    setSubmittedCode(code);
  };

  const authorise = async () => {
    const authorisation = await fetch(`/api/external/authorise`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handover: handoverId,
        code: submittedcode,
      }),
    });

    if (!authorisation.ok) {
      const data = (await authorisation.json()) as { message: string };
      setError(data.message);
      return;
    }
  };

  return (
    <>
      {claimeeDetails == null && (
        <Card
          footerRight={
            <Button
              label="Next"
              onclick={submit}
              image={<ChevronRight size={16} />}
              direction="rtl"
            />
          }
        >
          <h2>Help someone claim external status</h2>
          <p>
            Enter the code you were given by the person attemping to verify to
            help them claim external status.
          </p>
          <p>
            If you don&apos;t know the person who gave you this code, do not
            proceed and report it to uowbo!.
          </p>
          <p>Code</p>
          <input
            type="text"
            onChange={(e) => {
              setCode(e.target.value);
            }}
            placeholder="123456"
          />
        </Card>
      )}
      {claimeeDetails && (
        <Card
          footerRight={
            <Button
              label="Authorise"
              onclick={authorise}
              image={<ShieldCheckIcon size={16} />}
            />
          }
        >
          <h2>Helping {claimeeDetails.link!![0].fullName}</h2>

          <p>
            You&apos;re helping {claimeeDetails.link!![0].fullName} claim
            external status.
          </p>
          <DiscordDisplay
            username={claimeeDetails.username!!}
            avatarUrl={claimeeDetails.avatar!!}
            verified={claimeeDetails.link!![0].isVerified!!}
          />
          <p>Only help people you trust and know yourself.</p>
          <p>
            Helping people you don&apos;t know can have undesired consequences,
            especially if they break rules or cause disruption.
          </p>
          {error && <p className="error">{error}</p>}
        </Card>
      )}
    </>
  );
};

export default HelpExternalPage;

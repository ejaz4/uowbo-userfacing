import { createTransport } from "nodemailer";


// const { privateKey, selector } = JSON.parse(process.env.DKIM_PRIVATE_KEY) as { privateKey: string, selector: string }

export const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
})
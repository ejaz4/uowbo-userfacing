declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BOT_HOST: string;
            SECRET: string;
            SMTP_HOST: string;
            SMTP_PORT: number;
            SMTP_USER: string;
            SMTP_PASSWORD: string;
            DKIM_PRIVATE_KEY: string;
        }
    }   
}

export { }
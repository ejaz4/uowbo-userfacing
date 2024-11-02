declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BOT_HOST: string;
            SECRET: string;
        }
    }
}

export { }
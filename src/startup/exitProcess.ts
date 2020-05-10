export const processExit = () => {
  const requiredEnvVariables = ["gmailUser", "gmailPass", "sessionSecret"];

  requiredEnvVariables.map((env) => {
    if (!process.env[env]) {
      console.error(`process.env.${env} is not set`);
      process.exit(1);
    }
  });
};
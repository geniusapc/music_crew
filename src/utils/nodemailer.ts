import nodemailer from "nodemailer";

export const sendEmail = async (moreInfo: any) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.gmailUser,
      pass: process.env.gmailPass,
    },
  });

  await transporter.sendMail({
    from: '"Music Crew" <princearthurict@gmail.com>',
    ...moreInfo,
  });
};

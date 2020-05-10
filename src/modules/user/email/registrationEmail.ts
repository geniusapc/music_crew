import { sendEmail } from "../../../utils/nodemailer";
import { config } from "../../../config";
import { v4 } from "uuid";
import { redis } from "../../../redis";

export const sendRegistrationEmail = async (user: any) => {
  const token = v4();
  await redis.set("CA" + token, user.id, "EX", 60 * 60 * 24);

  let info = {
    to: user.email,
    subject: "Account confirmation",
    text: "that is a text",
    html: `
            Hello ${user.firstName} </b> 
            thank you for registering, click the link below to complete your registration
            <a href="${config.clientURL}/user/confirm-account/${token}">Confirm Account</a>". </b> 
            Note that the link is valid for 24hrs
            Please ignore this message if you didn't perform the transaction
            `,
  };
  await sendEmail(info);
};

import { sendEmail } from "../../../utils/nodemailer";
import { config } from "../../../config";
import { v4 } from "uuid";
import { redis } from "../../../redis";

export const sendforgottenPassEmail = async (user: any) => {
  const token = v4();
  await redis.set("FP" + token, user.id, "EX", 60 * 60 * 24);

  let info = {
    to: user.email,
    subject: "Change password",
    text: "that is a text",
    html: `
            Hello ${user.firstName} </b>
            You made a request to change your password, click on the link below to change your password
            <a href="${config.clientURL}/user/change-password/${token}">Change Password</a>"
            Note that the link is valid for 24hrs.
            Please ignore this message if you didn't perform the transaction
            `,
  };
  await sendEmail(info);
};

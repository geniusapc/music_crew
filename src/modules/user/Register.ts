import { Resolver, Mutation, Arg } from "type-graphql";
import { RegisterInput } from "./register/registerInputs";
import { User } from "../../model/User";
import { UserType } from "../../entities/user";
import bycript from "bcryptjs";
import { sendRegistrationEmail } from "./email/registrationEmail";

@Resolver()
export class RegisterResolver {
  @Mutation(() => UserType)
  async Register(
    @Arg("data") { firstName, lastName, email, password }: RegisterInput
  ): Promise<UserType> {
    const hashedpass = await bycript.hash(password, 12);
    const user = await User({
      firstName,
      lastName,
      email,
      password: hashedpass,
    }).save();
    await sendRegistrationEmail(user);
    return user;
  }
}

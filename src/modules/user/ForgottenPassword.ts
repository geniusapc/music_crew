import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../model/User";
import { sendforgottenPassEmail } from "./email/forgottenPassword";

@Resolver()
export class ForgottenPasswordResolver {
  @Mutation(() => Boolean)
  async forgottenPassword(@Arg("email") email: string): Promise<Boolean> {
    let user = await User.findOne({ email });
    if (!user) return false;
    await sendforgottenPassEmail(user);
    return true;
  }
}

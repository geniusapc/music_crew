import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../model/User";
import { redis } from "../../redis";
import bycript from "bcryptjs";

@Resolver()
export class ConfirmAccountResolver {
  @Mutation(() => Boolean)
  async changePassword(
    @Arg("token") token: string,
    @Arg("password") password: string
  ): Promise<Boolean> {
    const userId = await redis.get(token);
    if (!userId) return false;
    const hashedpass = await bycript.hash(password, 12);
    await User.updateOne({ _id: userId }, { password: hashedpass });
    return true;
  }
}

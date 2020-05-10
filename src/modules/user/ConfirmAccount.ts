import { Resolver, Mutation, Arg } from "type-graphql";
import { User } from "../../model/User";
import { redis } from "../../redis";

@Resolver()
export class ConfirmAccountResolver {
  @Mutation(() => Boolean)
  async confirmAccout(@Arg("token") token: string): Promise<Boolean> {
    const userId = await redis.get(token);
    if (!userId) return false;
    await User.updateOne({ _id: userId }, { confirmed: true });
    return true;
  }
}

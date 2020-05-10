import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import bycript from "bcryptjs";
import { User } from "../../model/User";
import { UserType } from "../../entities/user";
import { MyContext } from "../../types/mycontext";

@Resolver()
export class LoginResolver {
  @Mutation(() => UserType)
  async Login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<UserType> {
    const user = await User.findOne({ email });
    if (!user) throw new Error("invalid credentials");

    const valid = await bycript.compare(password, user.password);
    if (!valid) throw new Error("invalid credentials");
    if (!user.confirmed)
      throw new Error("Please confirm your account before you log in");

    ctx.req.session!.userId = user.id;
    return user;
  }
}

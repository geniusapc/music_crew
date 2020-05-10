import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "../../model/User";
import { UserType } from "../../entities/user";
import { MyContext } from "../../types/mycontext";

@Resolver(UserType)
export class MyProfileResolver {
  @Query(() => UserType, { nullable: true })
  async MyProfile(@Ctx() ctx: MyContext): Promise<UserType | undefined> {
    return await User.findOne({ _id: ctx.req.session!.userId });
  }

  @Query(() => [UserType], { nullable: true })
  async AllUser(): Promise<[UserType] | undefined> {
    return await User.find();
  }
}

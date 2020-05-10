const { ObjectType, Field, Root } = require("type-graphql");

@ObjectType()
export class UserType {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  name(@Root() parent: UserType): string {
    return `${parent["firstName"]}  kjlbvkj`;
  }
}

import { Field, InputType } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class RegisterInput {
  @Length(4, 6)
  @Field()
  firstName: string;

  @Length(4, 6)
  @Field()
  lastName: string;

  @Length(4, 6)
  @Field()
  email: string;

  @Field()
  password: string;
}

import { IsNotEmpty, IsEmail, Length } from "class-validator";

export class CreateUserCommand {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Length(3, 64)
  readonly name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

import { IsNotEmpty, IsEmail, IsAlpha } from "class-validator";

export class CreateUserCommand {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsAlpha("pt-PT")
  readonly name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

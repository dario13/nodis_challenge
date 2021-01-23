import { Length, IsNotEmpty, IsEmail } from "class-validator";

export class DeleteUserProductCommand {
  @IsNotEmpty()
  @Length(13, 13)
  readonly gtin13: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  constructor(gtin13: string, email: string) {
    this.gtin13 = gtin13;
    this.email = email;
  }
}

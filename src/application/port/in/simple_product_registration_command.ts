import { Length, IsInt, IsNotEmpty, IsEmail } from "class-validator";

export class SimpleProductRegistrationCommand {
  @IsNotEmpty()
  @Length(13, 13)
  readonly gtin13: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsInt()
  readonly quantity: number;

  @IsNotEmpty()
  @IsInt()
  readonly price: number;

  constructor(gtin13: string, email: string, quantity: number, price: number) {
    this.gtin13 = gtin13;
    this.email = email;
    this.quantity = quantity;
    this.price = price;
  }
}

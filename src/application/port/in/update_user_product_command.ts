import { IsEmail, IsInt, IsNotEmpty, Length } from "class-validator";

export class UpdateUserProductCommand {
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

  constructor(
    gtin13: string,
    email: string,
    price?: number,
    quantity?: number
  ) {
    this.gtin13 = gtin13;
    this.email = email;
    if (price) this.price = price;
    if (quantity) this.quantity = quantity;
  }
}

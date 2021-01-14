import { Length, IsInt, IsNotEmpty, IsEmail } from "class-validator";

export class FullProductRegistrationCommand {
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

  @IsNotEmpty()
  @Length(3, 128)
  readonly name: string;

  @IsNotEmpty()
  @Length(10, 128)
  readonly description: string;

  @IsNotEmpty()
  readonly images: Array<string>;

  constructor(
    gtin13: string,
    email: string,
    quantity: number,
    price: number,
    name: string,
    description: string,
    images: Array<string>
  ) {
    this.gtin13 = gtin13;
    this.email = email;
    this.quantity = quantity;
    this.price = price;
    this.name = name;
    this.description = description;
    this.images = images;
  }
}

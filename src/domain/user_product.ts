import { InvalidArgument } from "./errors/invalid_argument";
import { Product } from "./product";
import { User } from "./user";
import { Uuid } from "./value_objects/uuid";

export type Status = "created" | "updated" | "deleted";

export class UserProduct {
  private readonly _id: string;
  private _user: User;
  private _product: Product;
  private _price: number;
  private _quantity: number;
  private _status: Status;
  private _createdAt: Date;
  private _updatedAt?: Date;
  private _deletedAt?: Date;

  constructor(
    user: User,
    product: Product,
    price: number,
    quantity: number,
    id?: string,
    createdAt?: Date,
    status?: Status,
    updatedAt?: Date,
    deletedAt?: Date
  ) {
    this.ensurePriceIsBiggerThanZero(price);
    this.ensureIsValidQuantityForCreation(quantity);
    this._id = id || Uuid.random().value;
    this._user = user;
    this._product = product;
    this._price = price;
    this._quantity = quantity;
    this._status = status || "created";
    this._createdAt = createdAt || new Date(Date.now());
    this._updatedAt = updatedAt;
    this._deletedAt = deletedAt;
  }

  private ensureIsValidQuantityForCreation(quantity: number) {
    if (quantity <= 0) throw new InvalidArgument("quantity");
  }

  private ensureIsValidQuantityForUpdate(quantity: number) {
    if (quantity < 0) throw new InvalidArgument("quantity");
  }

  private ensureIsNotDeleted() {
    if (this._status === "deleted") {
      throw new Error("Cant update deleted product");
    }
  }

  private ensurePriceReductionIsNotLessThanFiftyPercent(newPrice: number) {
    if (newPrice <= this._price * 0.5)
      throw new Error("The new price cannot have a discount of more than 50%");
  }

  private ensurePriceIsBiggerThanZero(newPrice: number) {
    if (newPrice <= 0)
      throw new Error("The price cannot be less than or equal to zero");
  }

  set price(newPrice: number) {
    this.ensureIsNotDeleted();
    this.ensurePriceIsBiggerThanZero(newPrice);
    this.ensurePriceReductionIsNotLessThanFiftyPercent(newPrice);
    this._price = newPrice;
    this._status = "updated";
    this._updatedAt = new Date(Date.now());
  }

  set quantity(newQuantity: number) {
    this.ensureIsNotDeleted();
    this.ensureIsValidQuantityForUpdate(newQuantity);
    this._quantity = newQuantity;
    this._status = "updated";
    this._updatedAt = new Date(Date.now());
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  get status() {
    return this._status;
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get deletedAt() {
    return this._deletedAt;
  }

  get user() {
    return this._user;
  }

  get product() {
    return this._product;
  }

  public delete() {
    this.ensureIsNotDeleted();
    this._status = "deleted";
    this._deletedAt = new Date(Date.now());
  }
}

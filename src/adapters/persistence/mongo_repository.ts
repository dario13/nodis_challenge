import { CreateUserPort } from "../../application/port/out/create_user_port";
import { DeleteUserProductPort } from "../../application/port/out/delete_user_product_port";
import { LoadProductPort } from "../../application/port/out/load_product_port";
import { LoadUserPort } from "../../application/port/out/load_user_port";
import { LoadUserProductsPort } from "../../application/port/out/load_user_products_port";
import { LoadUserProductPort } from "../../application/port/out/load_user_product_port";
import { RegisterProductPort } from "../../application/port/out/register_product_port";
import { RegisterUserProductPort } from "../../application/port/out/register_user_product_port";
import { Product } from "../../domain/product";
import { User } from "../../domain/user";
import { UserProduct } from "../../domain/user_product";
import { ProductModel, UserModel, UserProductModel } from "./mongo_models/";

export class MongoRepository
  implements
    DeleteUserProductPort,
    LoadProductPort,
    CreateUserPort,
    LoadUserPort,
    LoadUserProductPort,
    LoadUserProductsPort,
    RegisterProductPort,
    RegisterUserProductPort {
  constructor() {}

  async deleteUserProduct(userProduct: UserProduct): Promise<void> {
    return new Promise((resolve, reject) =>
      UserProductModel.findByIdAndDelete(
        { _id: userProduct.id.value },
        null,
        (err: any) => {
          if (err) throw new Error(err);
        }
      )
    );
  }

  async loadProduct(gtin13: string, name?: string): Promise<Product> {
    const productDoc = await ProductModel.find(
      { $or: [{ gtin13: gtin13 }, { name: name }] },
      (doc: any) => {
        return doc;
      }
    );
    if (productDoc.length > 0)
      return new Product(
        productDoc.name,
        productDoc.description,
        productDoc.gtin13,
        productDoc.images,
        productDoc._id
      );
    throw Error("Product not found");
  }

  async loadUser(email: string): Promise<User> {
    const userDoc = await UserModel.find({ email: email }).exec();
    if (userDoc.length > 0)
      return new User(userDoc.name, userDoc.email, userDoc._id);
    throw Error("User not found");
  }

  async createUser(user: User): Promise<void> {
    const userDoc = {
      _id: user.id!.value,
      email: user.email,
      name: user.name,
    };
    const userToSave = new UserModel(userDoc);
    userToSave.save((err: any) => {
      if (err) throw new Error(err);
    });
  }

  async loadUserProduct(email: string, gtin13: string): Promise<UserProduct> {
    return await UserProductModel.find(
      { email: email, gtin13: gtin13 },
      function (err: any, doc: any) {
        if (err) throw new Error(err);
        return doc;
      }
    );
  }

  async loadUserProducts(email: string): Promise<Array<UserProduct>> {
    return await UserProductModel.find(
      { email: email },
      function (err: any, doc: any) {
        if (err) throw new Error(err);
        return doc;
      }
    );
  }

  async registerProduct(product: Product): Promise<void> {
    const productDoc = {
      _id: product.id!.value,
      gtin13: product.gtin13,
      name: product.name,
      images: product.images,
      description: product.description,
    };
    const productToSave = new ProductModel(productDoc);
    productToSave.save((err: any) => {
      if (err) throw new Error(err);
    });
  }

  async registerUserProduct(userProduct: UserProduct): Promise<void> {
    const userProductDoc = {
      _id: userProduct.id.value,
      price: userProduct.price,
      quantity: userProduct.quantity,
    };
    const userProductToSave = new UserProductModel(userProductDoc);
    userProductToSave.save((err: any) => {
      if (err) throw new Error(err);
    });
  }
}

import { CreateUserPort } from "../../application/port/out/create_user_port";
import { LoadProductPort } from "../../application/port/out/load_product_port";
import { LoadUserPort } from "../../application/port/out/load_user_port";
import { LoadUserProductsPort } from "../../application/port/out/load_user_products_port";
import { LoadUserProductPort } from "../../application/port/out/load_user_product_port";
import { RegisterProductPort } from "../../application/port/out/register_product_port";
import { RegisterUserProductPort } from "../../application/port/out/register_user_product_port";
import { UpdateUserProductPort } from "../../application/port/out/update_user_product_port";
import { Product } from "../../domain/product";
import { User } from "../../domain/user";
import { UserProduct } from "../../domain/user_product";
import {
  IUser,
  IProduct,
  IUserProduct,
  ProductModel,
  UserModel,
  UserProductModel,
} from "./mongo_models/";

export class MongoRepository
  implements
    LoadProductPort,
    CreateUserPort,
    LoadUserPort,
    LoadUserProductPort,
    LoadUserProductsPort,
    RegisterProductPort,
    UpdateUserProductPort,
    RegisterUserProductPort {
  constructor() {}

  async loadProduct(
    gtin13?: string,
    name?: string,
    id?: string
  ): Promise<Product> {
    const productDoc = await ProductModel.findOne(
      { $or: [{ gtin13: gtin13 }, { name: name }, { _id: id }] },
      (doc: IProduct) => doc
    );
    if (await productDoc)
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
    const userDoc: IUser = await UserModel.findOne({ email: email }).exec();
    if (userDoc) return new User(userDoc.name, userDoc.email, userDoc._id);
    throw Error("User not found");
  }

  async createUser(user: User): Promise<void> {
    const userInput = {
      _id: user.id!,
      email: user.email,
      name: user.name,
    };
    const userToSave = new UserModel(userInput);
    userToSave.save((err: any) => {
      if (err) throw new Error(err);
    });
  }

  async loadUserProduct(email: string, gtin13: string): Promise<UserProduct> {
    const user = await this.loadUser(email);
    const productDoc = await this.loadProduct(gtin13);
    const userProductDoc: IUserProduct = await UserProductModel.findOne({
      userId: user.id,
      productId: productDoc.id,
    }).exec();

    if (userProductDoc) {
      return new UserProduct(
        user,
        productDoc,
        userProductDoc.price,
        userProductDoc.quantity,
        userProductDoc.id,
        userProductDoc.createdAt,
        userProductDoc.status,
        userProductDoc.updatedAt,
        userProductDoc.deletedAt
      );
    }
    throw Error("User Product not found");
  }

  async loadUserProducts(email: string): Promise<Array<UserProduct>> {
    const user = await this.loadUser(email);
    const userProductsDoc: Array<IUserProduct> = await UserProductModel.find({
      userId: user.id,
    }).exec();

    if (userProductsDoc.length > 0) {
      let userProducts: Array<UserProduct> = [];
      for (let doc of userProductsDoc) {
        const productDoc = await this.loadProduct("", "", doc.productId);

        userProducts.push(
          new UserProduct(
            user,
            productDoc,
            doc.price,
            doc.quantity,
            doc._id,
            doc.createdAt,
            doc.status,
            doc.updatedAt,
            doc.deletedAt
          )
        );
      }

      return userProducts;
    }
    throw Error("User Product not found");
  }

  async registerProduct(product: Product): Promise<void> {
    const productInput = {
      _id: product.id,
      gtin13: product.gtin13,
      name: product.name,
      images: product.images,
      description: product.description,
    };
    const productToSave = new ProductModel(productInput);
    productToSave.save((err: any) => {
      if (err) throw new Error(err);
    });
  }

  async registerUserProduct(userProduct: UserProduct): Promise<void> {
    const userProductInput = {
      _id: userProduct.id,
      productId: userProduct.product.id,
      userId: userProduct.user.id!,
      price: userProduct.price,
      status: userProduct.status,
      quantity: userProduct.quantity,
      createdAt: userProduct.createdAt,
      updatedAt: userProduct.updatedAt,
      deletedAt: userProduct.deletedAt,
    };
    const userProductToSave = new UserProductModel(userProductInput);
    userProductToSave.save((err: any) => {
      if (err) throw Error(err);
    });
  }

  async updateUserProduct(userProduct: UserProduct): Promise<void> {
    const userProductDoc: IUserProduct = await UserProductModel.findOne({
      _id: userProduct.id,
    });
    if (userProductDoc) {
      const userProductInput = {
        _id: userProductDoc.id,
        productId: userProduct.product.id!,
        userId: userProduct.user.id!,
        price: userProduct.price!,
        status: userProduct.status!,
        quantity: userProduct.quantity!,
        createdAt: userProduct.createdAt!,
        updatedAt: userProduct.updatedAt!,
        deletedAt: userProduct.deletedAt!,
      };
      userProductDoc.overwrite(userProductInput);
      userProductDoc.save();
      return;
    }
    throw Error("User Product not found");
  }
}

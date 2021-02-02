import { Product } from "../../domain/product";
import { User } from "../../domain/user";
import { UserProduct } from "../../domain/user_product";

const anUser = new User("UserTest", "usertest@gmail.com");
const aProduct = new Product(
  "Notebook Lenovo Y700",
  "Notebook gamer",
  "8899556286332",
  [
    "https://www.lenovo.com/medias/lenovo-y700-17-hero.png",
    "https://www.lenovo.com/medias/lenovo-y700-subserie-features-4.png",
  ]
);

describe("Test the rules of a product for a user", () => {
  test("Given a valid price and quantity then the product is assigned to a user", () => {
    //Given
    const price = 1000;
    const quantity = 3;
    //When
    const productUser = new UserProduct(anUser, aProduct, price, quantity);
    //Then
    expect(productUser).toBeInstanceOf(UserProduct);
  });
  test.each([-1, 0])(
    "Given zero or negative price then the product is not created",
    (priceUnderTest: number) => {
      const quantity = 1;
      //When
      const sut = () => {
        const productUserTestObject = new UserProduct(
          anUser,
          aProduct,
          priceUnderTest,
          quantity
        );
      };
      //Then
      expect(sut).toThrowError();
    }
  );
  test.each([-1, 0])(
    "Given zero or negative quantity then the product is not created",
    (quantityUnderTest: number) => {
      const price = 100;
      //When
      const sut = () => {
        const productUserTestObject = new UserProduct(
          anUser,
          aProduct,
          price,
          quantityUnderTest
        );
      };
      //Then
      expect(sut).toThrowError();
    }
  );
  test.each([0, 1, 2])(
    "A user product quantity can be updated with zero or positive value",
    (quantityUnderTest: number) => {
      const price = 100;
      const quantity = 10;
      const productUserTestObject = new UserProduct(
        anUser,
        aProduct,
        price,
        quantity
      );

      //When
      productUserTestObject.quantity = quantityUnderTest;

      //Then
      expect(productUserTestObject.quantity).toBe(quantityUnderTest);
    }
  );
  test.each([100, 50, 2])(
    "A user product price cannot be updated with a value that is 50% or less than the current price",
    (priceUnderTest: number) => {
      const price = 200;
      const quantity = 10;
      const productUserTestObject = new UserProduct(
        anUser,
        aProduct,
        price,
        quantity
      );

      //When
      const sut = () => (productUserTestObject.price = priceUnderTest);

      //Then
      expect(sut).toThrowError();
    }
  );
  test("A user product cannot be updated if was deleted", () => {
    const price = 200;
    const quantity = 10;
    const productUserTestObject = new UserProduct(
      anUser,
      aProduct,
      price,
      quantity
    );
    productUserTestObject.delete();

    //When
    const sut1 = () => (productUserTestObject.price = 100);
    const sut2 = () => (productUserTestObject.quantity = 20);

    //Then
    expect(sut1).toThrowError();
    expect(sut2).toThrowError();
  });
});

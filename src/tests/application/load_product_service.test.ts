import { LoadProductService } from "../../application/service/load_product_service";
import { RepositoryMock } from "../../tests/mocks/repository_mock";
import { userProductMock } from "../../tests/mocks/user_product_mock";

const repositoryResolve = new RepositoryMock();

describe("Test for load a user's product", () => {
  test("Given valid arguments then the user's product is loaded", async () => {
    const service = new LoadProductService(repositoryResolve);

    const registerAproduct = service.getProduct(
      userProductMock().product.gtin13
    );

    expect(registerAproduct).resolves;
  });
});

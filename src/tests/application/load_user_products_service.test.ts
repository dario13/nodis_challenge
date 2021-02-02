import { LoadUserProductsService } from "../../application/service/load_user_products_service";
import { RepositoryMock } from "../../tests/mocks/repository_mock";
import { userProductMock } from "../../tests/mocks/user_product_mock";

const repositoryResolve = new RepositoryMock();

describe("Test for load all user products", () => {
  test("Given valid arguments then all the user products are loaded", async () => {
    const service = new LoadUserProductsService(
      repositoryResolve,
      repositoryResolve
    );

    const registerAproduct = service.getUserProducts(
      userProductMock().user.email
    );

    expect(registerAproduct).resolves;
  });
});

import { deleteUserProductCommandMock } from "../../tests/mocks/delete_user_command_mock";
import { RepositoryMock } from "../../tests/mocks/repository_mock";
import { DeleteUserProductService } from "./delete_user_product_service";

const repository = new RepositoryMock();

describe("Test for delete a user's product", () => {
  test("Given valid argument then the user's product is deleted", async () => {
    const service = new DeleteUserProductService(repository, repository);

    const deletedAproduct = await service.deleteProduct(
      deleteUserProductCommandMock()
    );

    expect(deletedAproduct).toBe("deleted");
  });
});

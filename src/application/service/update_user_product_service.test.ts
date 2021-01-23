import { RepositoryMock } from "../../tests/mocks/repository_mock";
import { updateUserProductRegistrationCommandMock } from "../../tests/mocks/update_user_product_command_mock";
import { UpdateUserProductService } from "./update_user_product_service";

const repository = new RepositoryMock();

describe("Test for update a product", () => {
  test("Given valid argument then the user's product is updated", async () => {
    const service = new UpdateUserProductService(repository, repository);

    const updateAproduct = await service.updateUserProduct(
      updateUserProductRegistrationCommandMock()
    );

    expect(updateAproduct).toBe("updated");
  });
});

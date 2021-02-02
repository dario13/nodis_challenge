import { fullProductRegistrationCommandMock } from "../mocks/full_product_registration_command_mock";
import { RepositoryMock } from "../mocks/repository_mock";
import { RepositoryRejectedMock } from "../mocks/repository_rejected_mock";
import { CreateUserService } from "../../application/service/create_user_service";

const repositoryResolve = new RepositoryMock();
const repositoryReject = new RepositoryRejectedMock();

describe("Test for create user", () => {
  test("Given valid arguments then the user is registered", async () => {
    const service = new CreateUserService(repositoryReject, repositoryResolve);

    const registerAproduct = await service.createUser(
      fullProductRegistrationCommandMock()
    );

    expect(registerAproduct).toBe("created");
  });
});

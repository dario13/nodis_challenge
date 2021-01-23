import { simpleProductRegistrationCommandMock } from "../../tests/mocks/simple_product_registration_command_mock";
import { RepositoryMock } from "../../tests/mocks/repository_mock";
import { SimpleProductRegistrationService } from "./simple_product_registration_service";
import { RepositoryRejectedMock } from "../../tests/mocks/repository_rejected_mock";

const repositoryResolve = new RepositoryMock();
const repositoryReject = new RepositoryRejectedMock();

describe("Test for simple product registration", () => {
  test("Given a valid user, product, quantity and price then the user's product is registered", () => {
    const service = new SimpleProductRegistrationService(
      repositoryResolve,
      repositoryResolve,
      repositoryReject,
      repositoryResolve
    );

    const registerAproduct = service.registerAproduct(
      simpleProductRegistrationCommandMock()
    );

    expect(registerAproduct).resolves;
  });
});

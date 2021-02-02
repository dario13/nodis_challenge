import { FullProductRegistrationService } from "../../application/service/full_product_registration_service";
import { fullProductRegistrationCommandMock } from "../../tests/mocks/full_product_registration_command_mock";
import { RepositoryMock } from "../../tests/mocks/repository_mock";
import { RepositoryRejectedMock } from "../../tests/mocks/repository_rejected_mock";

const repositoryResolve = new RepositoryMock();
const repositoryReject = new RepositoryRejectedMock();

describe("Test for full product registration", () => {
  test("Given a argument then the user's product is registered", () => {
    const service = new FullProductRegistrationService(
      repositoryResolve,
      repositoryReject,
      repositoryResolve,
      repositoryResolve
    );

    const registerAproduct = service.registerAproduct(
      fullProductRegistrationCommandMock()
    );

    expect(registerAproduct).resolves;
  });
});

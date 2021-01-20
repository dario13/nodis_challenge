import { registrationCommandMock } from "../../tests/mocks/registration_command_mock";
import { RepositoryMock } from "../../tests/mocks/repository_mock";
import { SimpleProductRegistrationService } from "./simple_product_registration_service";

const repository = new RepositoryMock();

describe("Test for simple product registration", () => {
  test("Given a valid user, product, quantity and price then the user product is registered", () => {
    const service = new SimpleProductRegistrationService(
      repository,
      repository,
      repository
    );

    const registerAproduct = service.registerAproduct(
      registrationCommandMock()
    );

    expect(registerAproduct).resolves;
  });
});

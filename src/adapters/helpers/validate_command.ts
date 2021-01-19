import { validate, ValidationError } from "class-validator";

export const validateCommand = async (command: any): Promise<void> => {
  return validate(command).then(async (errors) => {
    if (errors.length > 0)
      return Promise.reject(createFormattedResponse(errors));
    return Promise.resolve();
  });
};

const createFormattedResponse = (errors: ValidationError[]) => {
  let message = "";
  errors.map((value) => {
    if (value.constraints)
      message += "Property " + Object.values(value.constraints) + ". ";
  });
  return new Error(message);
};

export class InvalidArgument extends Error {
  constructor(argumentName: string) {
    super();
    super.message = `The argument name: ${argumentName} is invalid`;
  }
}

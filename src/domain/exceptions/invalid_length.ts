export class InvalidLength extends Error {
  constructor(argumentName: string) {
    super();
    super.message = `The argument name: ${argumentName} has an invalid length `;
  }
}

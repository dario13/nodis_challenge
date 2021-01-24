import { LoggerImplementation } from "../adapters/persistence/logger/logger_implementation";

export const loggerFactory = (): LoggerImplementation => {
  return new LoggerImplementation();
};

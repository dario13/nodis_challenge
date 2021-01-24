import morgan, { StreamOptions } from "morgan";
import { LoggerImplementation } from "../../adapters/persistence/logger/logger_implementation";

const logger = new LoggerImplementation();

const stream: StreamOptions = {
  write: (message) => logger.http(message),
};

export const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream }
);

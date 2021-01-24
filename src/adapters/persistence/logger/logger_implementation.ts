import { Logger } from "./logger";

import winston from "winston";

export class LoggerImplementation implements Logger {
  private winstonLogger: winston.Logger;

  constructor() {
    this.winstonLogger = this.configuration();
  }

  error(anError: Error): void {
    this.winstonLogger.error(anError.message);
  }
  warn(message: string): void {
    this.winstonLogger.warn(message);
  }
  info(message: string): void {
    this.winstonLogger.info(message);
  }
  http(message: string): void {
    this.winstonLogger.http(message);
  }
  debug(message: string): void {
    this.winstonLogger.debug(message);
  }

  private configuration(): winston.Logger {
    const levels = {
      error: 0,
      warn: 1,
      info: 2,
      http: 3,
      debug: 4,
    };

    const level = () => {
      const env = process.env.NODE_ENV || "development";
      const isDevelopment = env === "development";
      return isDevelopment ? "debug" : "warn";
    };

    const colors = {
      error: "red",
      warn: "yellow",
      info: "green",
      http: "magenta",
      debug: "white",
    };

    winston.addColors(colors);

    const format = winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
      winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
      )
    );

    const transports = [
      new winston.transports.Console({
        format: winston.format.combine(
          format,
          winston.format.colorize({ all: true })
        ),
      }),
      new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
        format: format,
      }),
      new winston.transports.File({ filename: "logs/all.log", format: format }),
    ];

    const configuration = {
      level: level(),
      levels,
      transports,
    };

    return winston.createLogger(configuration);
  }
}

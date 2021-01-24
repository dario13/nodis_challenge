export interface Logger {
  error(message: Error): void;
  warn(message: string): void;
  info(message: string): void;
  http(message: string): void;
  debug(message: string): void;
}

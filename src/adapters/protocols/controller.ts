import { HttpResponse } from "./http_response";

export interface Controller<T = any> {
  run: (request: T) => Promise<HttpResponse>;
}

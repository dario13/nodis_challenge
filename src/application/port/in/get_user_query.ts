import { User } from "../../../domain/user";

export interface GetUserQuery {
  getUser(email: string): User;
}

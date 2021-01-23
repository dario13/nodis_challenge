import { User } from "../../../domain/user";

export interface LoadUserPort {
  loadUser(email: string): Promise<User>;
}

import { UserModel } from "@/domain/models";

export interface GetProfileUserRepository {
  getProfile: (id: string) => Promise<UserModel>
}

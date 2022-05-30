export interface UpdateClassUserRepository {
  updateProfile: (id: string, token: string) => Promise<void>
}

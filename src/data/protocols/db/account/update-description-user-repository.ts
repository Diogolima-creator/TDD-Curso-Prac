export interface UpdateUserRepository {
  updateProfile: (id: string, description: string, profilePic: string) => Promise<void>
}

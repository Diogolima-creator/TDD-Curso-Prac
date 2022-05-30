export interface UpdateProfileRepository {
  updateProfile: (id: string, description: string, profilePic: string) => Promise<void>
}

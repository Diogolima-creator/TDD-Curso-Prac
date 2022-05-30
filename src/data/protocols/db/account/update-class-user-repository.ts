export interface UpdateClassUserRepository {
  updateClass: (id: string, Module: string, Class: string, urlVideo: string) => Promise<void>
}

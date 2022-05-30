export interface UpdateLastClassUserRepository {
  updateLastClass: (id: string, posLastModule: string, posLastClass:string ) => Promise<void>
}

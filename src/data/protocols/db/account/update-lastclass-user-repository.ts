export interface UpdateLastClassUserRepository {
  updateLastClass: (id: string, posLastModule: number, posLastClass:number ) => Promise<void>
}

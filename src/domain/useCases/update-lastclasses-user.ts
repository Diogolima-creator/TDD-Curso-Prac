import { UserModel } from "../models"

export interface UpdateLastClassUser {
    update: (userDate: UpdateLastClassUser.Params) => Promise<void>
}

export namespace UpdateLastClassUser{
    export type Params = {
        id:string
        LastClasses: [number, number]
    }   
}
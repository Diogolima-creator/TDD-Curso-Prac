import { UserModel } from "../models"

export interface UpdateClassUser {
    update: (userDate: UpdateClassUser.Params) => Promise<void>
}

export namespace UpdateClassUser{
    export type Params = {
        id: string,
        classes: [string,string,string]
    }   
}

export interface UpdateProfile {
    update: (userDate: UpdateProfile.Params) => Promise<void>
}

export namespace UpdateProfile{
    export type Params = {
        id?: string,
        description?: string,
        profilePic?: string
    }   
}
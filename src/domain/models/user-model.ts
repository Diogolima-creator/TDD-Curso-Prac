export interface UserModel {
    id?: string
    email: string
    password: string
    username?: string
    profilePic?: string
    level?: string
    description?: string
    accessToken?: string
    classes?: [string, string, string]
    LastClasses?: [number, number],
    createdAt?: string
} 
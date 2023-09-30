import { DirectoryProfileEnum } from "./enums/DirectoryProfileEnum"
import { DirectoryScopeEnum } from "./enums/DirectoryScopeEnum"
import { DirectoryStatusEnum } from "./enums/DirectoryStatusEnum"

export interface UpdateDirectoryOutput {
    id:string,
    categoryId?:string|null,
    lastSession?:string|null,
    ownerDirectoryId?:string|null,
    password?:string,
    phoneNumber?:string,
    scope?: Array<DirectoryScopeEnum>
    status?: DirectoryStatusEnum
    userProfile?: DirectoryProfileEnum
}
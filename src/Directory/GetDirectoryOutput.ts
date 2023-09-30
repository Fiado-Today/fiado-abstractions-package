import { DirectoryProfileEnum } from "./enums/DirectoryProfileEnum"
import { DirectoryScopeEnum } from "./enums/DirectoryScopeEnum"
import { DirectoryStatusEnum } from "./enums/DirectoryStatusEnum"
import { TypeOfDirectoryIdEnum } from "./enums/TypeOfDirectoryIdEnum"

export interface GetDirectoryOutput {
    categoryId:string|null,
    identityId:string|null,
    lastSession:string|null,
    ownerDirectoryId:string|null,
    password:string,
    peopleId:string,
    phoneNumber:string,
    scope: Array<DirectoryScopeEnum>
    status: DirectoryStatusEnum
    userProfile: DirectoryProfileEnum
    typeOfDirectoryId: TypeOfDirectoryIdEnum
}
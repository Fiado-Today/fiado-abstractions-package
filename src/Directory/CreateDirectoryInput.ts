import { DirectoryProfileEnum } from "./enums/DirectoryProfileEnum"
import { DirectoryScopeEnum } from "./enums/DirectoryScopeEnum"
import { DirectoryStatusEnum } from "./enums/DirectoryStatusEnum"
import { TypeOfDirectoryIdEnum } from "./enums/TypeOfDirectoryIdEnum"

export interface CreateDirectoryInput {
    id:string,
    accountLevel: "1"| "2" | "3" | "4" 
    categoryId:string|null,
    identityId:string,
    ownerDirectoryId:string,
    password:string,
    peopleId:string,
    phoneNuber:string,
    scope: Array<DirectoryScopeEnum>
    status: DirectoryStatusEnum
    userProfile: DirectoryProfileEnum
    typeOfDirectoryId: TypeOfDirectoryIdEnum
}
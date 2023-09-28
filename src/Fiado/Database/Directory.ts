
import { DirectoryProfileEnum } from "../../Directory/enums/DirectoryProfileEnum";
import { DirectoryScopeEnum } from "../../Directory/enums/DirectoryScopeEnum";
import { DirectoryStatusEnum } from "../../Directory/enums/DirectoryStatusEnum";
import { TypeOfDirectoryIdEnum } from "../../Directory/enums/TypeOfDirectoryIdEnum";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface Directory extends EntityBase{
    accountLevel: "1"| "2" | "3" | "4" 
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
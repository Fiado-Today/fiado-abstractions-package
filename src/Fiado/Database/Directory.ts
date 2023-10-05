
import { DirectoryProfileEnum } from "../../Directory/enums/DirectoryProfileEnum";
import { DirectoryScopeEnum } from "../../Directory/enums/DirectoryScopeEnum";
import { DirectoryStatusEnum } from "../../Directory/enums/DirectoryStatusEnum";
import { TypeOfDirectoryIdEnum } from "../../Directory/enums/TypeOfDirectoryIdEnum";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface Directory extends EntityBase{
    identityId:string|null,
    lastSession:string|null,
    ownerDirectoryId:string|null,
    password:string,
    peopleId:string,
    phoneNumber:string,
    scope: Array<DirectoryScopeEnum>
    status: DirectoryStatusEnum
    userProfile: DirectoryProfileEnum
}
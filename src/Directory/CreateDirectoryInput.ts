import { UserProfileEnum } from "../General/enum/UserProfileEnum";
import { UserScopeEnum } from "../General/enum/UserScopeEnum";
import { DirectoryStatusEnum } from "./enums/DirectoryStatusEnum";

export interface CreateDirectoryInput{
    id:string,
    phoneNumber:string,
    password:string,
    userProfile:UserProfileEnum,
    ownerDirectoryId:string|null,
    scopes:UserScopeEnum[],
    peopleId:string|null,
    status: DirectoryStatusEnum
}
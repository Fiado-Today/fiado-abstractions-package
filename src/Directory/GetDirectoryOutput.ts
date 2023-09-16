import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";
import { UserProfileEnum } from "../General/enum/UserProfileEnum";
import { UserScopeEnum } from "../General/enum/UserScopeEnum";
import { DirectoryStatusEnum } from "./enums/DirectoryStatusEnum";

export interface GetDirectoryOutput {
    id: string;
    createDate:string,
    phoneNumber: string; 
    userProfile: UserProfileEnum;
    ownerDirectoryId: string|null;
    scopes: UserScopeEnum[],
    peopleId: string|null;
    typeOfDirectoryId: TypeOfDirectoryIdEnum
    status: DirectoryStatusEnum
}
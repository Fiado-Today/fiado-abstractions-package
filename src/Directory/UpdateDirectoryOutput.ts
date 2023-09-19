import { UserProfileEnum } from "../General/enum/UserProfileEnum";
import { UserScopeEnum } from "../General/enum/UserScopeEnum";
import { DirectoryStatusEnum } from "./enums/DirectoryStatusEnum";

export interface UpdateDirectoryOutput {
    id: string,
    scope?: UserScopeEnum[],
    userProfile?: UserProfileEnum,
    password?: boolean,
    ownerDirectoryId?: string,
    status?: DirectoryStatusEnum
}
import { UserProfileEnum } from "../General/enum/UserProfileEnum"
import { UserScopeEnum } from "../General/enum/UserScopeEnum"
import { DirectoryStatusEnum } from "./enums/DirectoryStatusEnum"

export interface UpdateDirectoryInput {
    id: string,
    scopes?: UserScopeEnum[],
    userProfile?: UserProfileEnum,
    password?: string,
    ownerDirectoryId?: string,
    status?: DirectoryStatusEnum
}
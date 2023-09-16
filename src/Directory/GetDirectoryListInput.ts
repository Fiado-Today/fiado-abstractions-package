import { PaginationInput } from "../Fiado/Common/PaginationInput";
import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";
import { UserProfileEnum } from "../General/enum/UserProfileEnum";
import { UserScopeEnum } from "../General/enum/UserScopeEnum";

export interface GetDirectoryListInput {
    scopes?: UserScopeEnum[];
    ownerDirectoryId?: string;
    userProfile?: UserProfileEnum;
    typeOfDirectoryId: TypeOfDirectoryIdEnum;
    pagination?:PaginationInput
}
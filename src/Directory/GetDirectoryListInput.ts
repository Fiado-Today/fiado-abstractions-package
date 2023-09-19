import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";
import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";
import { UserProfileEnum } from "../General/enum/UserProfileEnum";
import { UserScopeEnum } from "../General/enum/UserScopeEnum";

export interface GetDirectoryListInput extends GetListBaseInput {
    scope?: UserScopeEnum[];
    ownerDirectoryId?: string;
    userProfile?: UserProfileEnum;
    typeOfDirectoryId: TypeOfDirectoryIdEnum
}
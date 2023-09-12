import {UserScopeEnum} from "../../General/enum/UserScopeEnum";
import {TenantEnum} from "../../General/enum/TenantEnum";
import {TypeOfDirectoryIdEnum} from "../../General/enum/TypeOfDirectoryIdEnum";
import {UserProfileEnum} from "../../General/enum/UserProfileEnum";

export interface Lead {
    id: string,
    phoneNumber: string,
    promotedToDirectory: boolean,
    referralCode: string | null,
    referralDirectoryId: string | null,
    scope: UserScopeEnum[],
    stateOfBirth: string | null,
    tenantId: TenantEnum,
    typeOfDirectoryId: TypeOfDirectoryIdEnum,
    userProfile: UserProfileEnum,
}
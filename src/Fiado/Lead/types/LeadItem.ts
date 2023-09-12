import {TypeOfDirectoryIdEnum} from "../../../General/enum/TypeOfDirectoryIdEnum";
import {UserScopeEnum} from "../../../General/enum/UserScopeEnum";
import {UserProfileEnum} from "../../../General/enum/UserProfileEnum";

export type LeadItem = {
    id: string,
    name: string,
    lastName: string,
    typeOfDirectoryId: TypeOfDirectoryIdEnum,
    phoneNumber: string,
    agentDirectoryId: string,
    agentCode: string,
    referralDirectoryId: string,
    referralCode: string,
    eventId: string,
    promotedToDirectory: boolean,
    scope: UserScopeEnum,
    userProfile: UserProfileEnum,
    ownerDirectoryId: string,
}
import { EntityBase } from "./Base/EntityBase";
import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";
import { UserProfileEnum } from "../General/enum/UserProfileEnum";
import { UserScopeEnum } from "../General/enum/UserScopeEnum";

export interface Onboarding extends EntityBase {
    referralDirectoryId: string|null,
    phoneNumber:string,
    referralCode:string|null,
    myReferralCode:string,
    userProfile: UserProfileEnum,
    otpConfirm:string|null,
    promotedToDirectory:boolean;
    scope: Array<UserScopeEnum>;
    typeOfDirectoryId:TypeOfDirectoryIdEnum;
}
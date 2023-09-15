import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";
import { UserProfileEnum } from "../General/enum/UserProfileEnum";
import { UserScopeEnum } from "../General/enum/UserScopeEnum";

export interface GetOnboardingOutput {
    id: string;
    referralDirectoryId: string|null,
    phoneNumber:string,
    referralCode:string|null,
    userProfile: UserProfileEnum,
    otpCOnfirm:string|null,
    promotedToDirectory:boolean;
    scopes: Array<UserScopeEnum>;
    createDate:string
    typeOfDirectoryId: TypeOfDirectoryIdEnum

}
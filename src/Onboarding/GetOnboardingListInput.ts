import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";
import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";
import { UserProfileEnum } from "../General/enum/UserProfileEnum";
import { UserScopeEnum } from "../General/enum/UserScopeEnum";

export interface GetOnboardingListInput extends GetListBaseInput {
    referralCode?:string | null;
    myReferralCode?:string;
    userProfile?:UserProfileEnum;
    promotedToDirectory?:boolean;
    scope?:Array<UserScopeEnum>;
    typeOfDirectoryId:TypeOfDirectoryIdEnum;
    phoneNumber?:string;
    name?:string;
}



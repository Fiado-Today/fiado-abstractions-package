import { DirectoryProfileEnum } from "../../Directory/enums/DirectoryProfileEnum";
import { TypeOfDirectoryIdEnum } from "../../Directory/enums/TypeOfDirectoryIdEnum";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface Onboarding extends EntityBase {
    referralDirectoryId: string|null,
    phoneNumber:string,
    referralCode:string|null,
    myReferralCode:string,
    userProfile: DirectoryProfileEnum,
    otpConfirm:string|null,
    promotedToDirectory:boolean;
}
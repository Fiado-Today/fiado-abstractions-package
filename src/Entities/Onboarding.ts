import { EntityBase } from "./Base/EntityBase";
import { TypeOfDirectoryIdEnum } from "../Directory/enums/TypeOfDirectoryIdEnum";
import { DirectoryProfileEnum } from "../Directory/enums/DirectoryProfileEnum";
import { DirectoryScopeEnum } from "../Directory/enums/DirectoryScopeEnum";

export interface Onboarding extends EntityBase {
    referralDirectoryId: string|null,
    phoneNumber:string,
    referralCode:string|null,
    myReferralCode:string,
    userProfile: DirectoryProfileEnum,
    otpConfirm:string|null,
    promotedToDirectory:boolean;
    typeOfDirectoryId:TypeOfDirectoryIdEnum;
}
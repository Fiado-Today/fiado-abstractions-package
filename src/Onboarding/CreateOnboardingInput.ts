import { EntityBase } from "../Entities/Base/EntityBase";

export interface CreateOnboardingInput extends EntityBase{
    otpConfirm:string|null,
    phoneNumber:string,
    promotedToDirectory:boolean,
    referralDirectoryId:string|null,
    referralCode:string|null,
    myReferralCode:string,
    ownerDirectoryId:string|null
}

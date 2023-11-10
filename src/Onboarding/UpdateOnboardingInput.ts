import { TypeOfDirectoryIdEnum } from "../Directory/enums/TypeOfDirectoryIdEnum";

export interface UpdateOnboardingInput {
    id: string;
    typeOfDirectoryId: TypeOfDirectoryIdEnum;
    referralDirectoryId?: string,
    referralCode?: string,
    promotedToDirectory?: boolean;
    ownerDirectoryId?: string;
    myReferralCode?: string;
    phoneNumber?: string;
}



import { TypeOfDirectoryIdEnum } from "../Directory/enums/TypeOfDirectoryIdEnum";

export interface GetOnboardingInput {
    myReferralCode?: string | null;
    typeOfDirectoryId: TypeOfDirectoryIdEnum
    phoneNumber?: string;
    id?: string;
}
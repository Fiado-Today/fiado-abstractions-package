import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";

export interface GetOnboardingInput {
    typeOfDirectoryId: TypeOfDirectoryIdEnum
    phoneNumber?: string;
    id?: string;
}
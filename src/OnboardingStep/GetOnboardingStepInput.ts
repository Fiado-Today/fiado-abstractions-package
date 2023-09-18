import { Country } from "../General/enum/Country";
import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";

export interface GetOnboardingStepInput {
    countryId: Country;
    directoryId: string;
    typeOfDirectoryId:TypeOfDirectoryIdEnum
}





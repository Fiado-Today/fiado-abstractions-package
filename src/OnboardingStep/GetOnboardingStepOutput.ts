import { DirectoryStatusEnum } from "../Directory/enums/DirectoryStatusEnum";
import { Country } from "../General/enum/Country";
import { OnboardingStep } from "./types/OnboardingStep";

export interface GetOnboardingStepOutput {
    status: DirectoryStatusEnum;
    observations: string;
    countryId: Country,
    onboardingStep: OnboardingStep[];

}




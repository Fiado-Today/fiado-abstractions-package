import { Country } from "../General/enum/Country";
import { OnboardingStatus } from "./types/OnboardingStatus";
import { OnboardingStep } from "./types/OnboardingStep";

export interface GetOnboardingStepOutput {
    status: OnboardingStatus;
    observations: string;
    countryId: Country,
    onboardingStep: OnboardingStep[];

}




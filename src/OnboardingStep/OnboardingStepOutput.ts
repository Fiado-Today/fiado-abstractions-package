import { Country } from "../General/enum/Country";
import { OnboardingStatusEnum } from "./enums/OnboardingStatusEnum";
import { OnboardingStepKeyEnum } from "./enums/OnboardingStepKeyEnum";
import { OnboardingStepStatusEnum } from "./enums/OnboardingStepStatusEnum";
import { OnboardingStatus } from "./types/OnboardingStatus";
import { OnboardingStep } from "./types/OnboardingStep";

export interface OnboardingStepOutput {
    status: OnboardingStatus;
    observations: string;
    countryId: Country,
    onboardingStep: OnboardingStep[];

}



const d:OnboardingStepOutput = {
    status: OnboardingStatusEnum.COMPLETED,
    observations: "",
    countryId: Country.MEX,
    onboardingStep: [{
        key: OnboardingStepKeyEnum.ACCOUNT_USD,
        status: OnboardingStepStatusEnum.COMPLETED
    }]
}
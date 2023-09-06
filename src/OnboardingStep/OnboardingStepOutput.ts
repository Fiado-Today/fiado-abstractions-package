import { Country } from "../General/enum/Country";
import { OnboardingStep } from "./types/OnboardingStep";

export interface OnboardingStepOutput {
    status: string;
    observations: string;
    countryId: Country,
    onboardingStep: OnboardingStep[];

}



const d:OnboardingStepOutput = {
    status: "",
    observations: "",
    countryId: Country.MEX,
    onboardingStep: [{
        key: "",
        status: ""
    }]
}
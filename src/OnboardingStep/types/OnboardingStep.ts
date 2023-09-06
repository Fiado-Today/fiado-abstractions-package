import { OnboardingStepKey } from "./OnboardingStepKey";
import { OnboardingStepStatus } from "./OnboardingStepStatus";

export type OnboardingStep = {
    key: OnboardingStepKey;
    status: OnboardingStepStatus;
}
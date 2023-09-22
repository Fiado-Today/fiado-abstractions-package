import { GetListBaseOutput } from "../Fiado/Common/GetListBaseOutput"
import { GetOnboardingOutput } from "./GetOnboardingOutput"

export interface GetOnboardingListOutput extends GetListBaseOutput<GetOnboardingOutput>{
    data: GetOnboardingOutput[]
}

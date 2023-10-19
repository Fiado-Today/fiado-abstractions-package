import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";

export interface GetCVContractInput extends GetListBaseInput{
    createDate?: string,
    cvContractVersion?: string,
    approved?: boolean
}
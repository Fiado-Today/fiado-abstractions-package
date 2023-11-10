import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";

export interface GetP2PTransactionCounterInput extends GetListBaseInput {
    fromDirectoryId?:string,
    toDirectoryId?:string,
}
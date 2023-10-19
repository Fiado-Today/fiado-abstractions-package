import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";

export interface GetCollectorTransactionInput extends GetListBaseInput{
    transactionNumber?:string,
    relatedIDTern?:string,
    directoryUserId?:string,
}
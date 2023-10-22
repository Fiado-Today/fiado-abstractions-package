import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";

export interface GetCollectorTransactionInput extends GetListBaseInput{
    transactionNumber?:string,
    relatedExternalId?:string,
    directoryUserId?:string,
    availableBalance?:boolean,
    cobrado?:boolean
}
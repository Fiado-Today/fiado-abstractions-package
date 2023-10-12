import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput"

export interface GetCreditCardRequestInput extends GetListBaseInput  {
    directoryId?:string
    ownerDirectoryId?:string
    initiatedBy?:string
}
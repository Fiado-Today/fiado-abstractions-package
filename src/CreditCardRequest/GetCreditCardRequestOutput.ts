import { GetListBaseOutput } from "../Fiado/Common/GetListBaseOutput";
import { CreditCardRequest } from "../Fiado/Database/CreditCardRequest";

export interface GetCreditCardRequestOutput extends  GetListBaseOutput<CreditCardRequest> {
    data: CreditCardRequest[]
}
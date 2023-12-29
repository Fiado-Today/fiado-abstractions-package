import { GetListBaseInput } from "../Common/GetListBaseInput";
import { IdentificationDocumentStatus } from "./TransactionTypeEnum";

export interface GetTransactionInput extends GetListBaseInput{
    beneficiaryDirectoryId?: string;
    beneficiaryTypeOfDirectoryId?: string;
    cardId?: string;
    currencyId?: string;
    directoryId?: string;
    externalReference?: string;
    operation?: string;
    paymentMethodId?: string;
    processable?: boolean;
    transactionGroupId?: string | null;
    transactionNumber?: string;
    type?: IdentificationDocumentStatus;
    typeOfDirectoryId?: string;
}


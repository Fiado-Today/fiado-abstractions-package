import { BankAccountUserStatus } from "../enums/BankAccountUserStatus";
import { BankAccountUserType } from "../types/BankAccountUserType";
import { Sex } from "../../KYC/enums/Sex";
import { Country } from "../../General/enum/Country";
import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";
export interface GetBankAccountUserListInput {
    typeOfUserId?: BankAccountUserType;
    dob?: string;
    name?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    status?: BankAccountUserStatus;
    sex?: Sex;
    documentNumber?: string;
    typeOfDocumentId?: TypeOfDocument;
    countryId?: Country;
    pagination?: {
        pageSize?: number;
        pageNumber?: number;
    };
}

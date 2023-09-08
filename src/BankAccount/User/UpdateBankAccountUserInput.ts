import { Address } from "../../Fiado/Address/Address";
import { Country } from "../../General/enum/Country";
import { Sex } from "../../KYC/enums/Sex";
import { TaxType } from "../../KYC/types/TaxType";
import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";
import { BankAccountUserStatus } from "../enums/BankAccountUserStatus";

export interface UpdateBankAccountUserInput {
    id:string,
    name?: string,
    lastName?: string,
    typeOfDocumentId?: TypeOfDocument,
    documentNumber?: string,
    sex?: Sex,
    email?: string,
    phoneNumber?: string,
    status: BankAccountUserStatus,
    taxNumber?: string,
    taxType?: TaxType,
    address?: Address,
    dob?:string,
    nationality?:Country,
    createdDate?: string,
    updatedDate?: string,
    deletedDate?: string,
    updatedBy?: string,
}
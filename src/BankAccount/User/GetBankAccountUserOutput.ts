
import { Country } from "../../General/enum/Country";
import { Sex } from "../../KYC/enums/Sex";
import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";
import { Address } from "../../Fiado/Address/Address";
import { BankAccountUserStatus } from "../enums/BankAccountUserStatus";
import { BankAccountUserType } from "../types/BankAccountUserType"

export interface GetBankAccountUserOutput {
    id:string,
    typeOfUserId:BankAccountUserType,
    dob:string,
    name:string,
    lastName:string,
    phoneNumber:string,
    email:string,
    address:Address,
    status:BankAccountUserStatus,
    sex:Sex,
    documentNumber:string,
    typeOfDocumentId:TypeOfDocument,
    countryId:Country,
    userAccountIds?: string[],
    createdDate?: string,
    updatedDate?: string,
    deletedDate?: string,
    updatedBy?: string,
}
import { Address } from "./enums/Address";
import { Country } from "./enums/Country";
import { Sex } from "./enums/Sex";
import { TaxType } from "./enums/TaxType";
import { TypeOfDocument } from "./enums/TypeOfDocument";
import { UserStatus } from "./enums/UserStatus";

export interface UpdateUserInput {
    id:string,
    name?: string,
    lastName?: string,
    typeOfDocumentId?: TypeOfDocument,
    documentNumber?: string,
    sex?: Sex,
    email?: string,
    phoneNumber?: string,
    status: UserStatus,
    taxNumber?: string,
    taxType?: TaxType,
    address?: Address,
    dob?:string,
    nationality?:Country
}
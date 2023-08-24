import { Address } from "./enums/Address";
import { Country } from "./enums/Country";
import { Sex } from "./enums/Sex";
import { TypeOfDocument } from "./enums/TypeOfDocument";
import { UserStatus } from "./enums/UserStatus";
import { UserType } from "./enums/UserType";
export interface GetUserOutput {
    id: string;
    typeOfUserId: UserType;
    dob: string;
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    address: Address;
    status: UserStatus;
    sex: Sex;
    documentNumber: string;
    typeOfDocumentId: TypeOfDocument;
    countryId: Country;
}

import { SexEnum } from "../General/enum/SexEnum";
import { TypeOfDocument } from "./enums/TypeOfDocument";



export type IdentificationDocument = {
    countryOfBirth: string | null,
    dob: string | null,
    documentNumber: string | null,
    documentType: TypeOfDocument,
    expirationDate: string | null,
    firstName: string | null,
    fullName: string | null,
    lastName: string | null,
    middleName: string | null,
    nationality: string | null,
    secondLastName: string | null,
    sex: SexEnum | null,
}
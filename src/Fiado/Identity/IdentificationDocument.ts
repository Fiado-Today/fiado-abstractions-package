import { Country } from "../../General/enum/Country";
import { Sex } from "../../KYC/enums/Sex";
import { TypeOfDocument } from "../../KYC/enums/TypeOfDocument";


export type IdentificationDocument = {
    frontImageName: string | null,
    backImageName: string | null,

    countryId: Country | null,
    expirationDate: string | null,
    issueDate: string | null,
    lastNameFirst: string | null,
    lastNameSecond: string | null,
    names: string | null,
    fullName: string | null,
    countryOfBirth: string | null,
    dateOfBirth: string | null,
    documentNumber: string | null,
    typeOfDocument: TypeOfDocument,
    sex: Sex | null,
    verificationId: string | null,
    curp: string | null,
    status: string | null,
}
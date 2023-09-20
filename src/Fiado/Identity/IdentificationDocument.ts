import { Country } from "../../General/enum/Country";
import { SexEnum } from "../../General/enum/SexEnum";
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
    sex: SexEnum | null,
}
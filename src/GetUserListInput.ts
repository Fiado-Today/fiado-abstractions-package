import { GetUserOutput } from "./GetUserOutput";
import { Country } from "./enums/Country";
import { Sex } from "./enums/Sex";
import { TypeOfDocument } from "./enums/TypeOfDocument";
import { UserStatus } from "./enums/UserStatus";
import { UserType } from "./enums/UserType";

export interface GetUserListInput {
    typeOfUserId?:UserType,
    dob?:string,
    name?:string,
    lastName?:string,
    phoneNumber?:string,
    email?:string,
    status?:UserStatus,
    sex?:Sex,
    documentNumber?:string,
    typeOfDocumentId?:TypeOfDocument,
    countryId?:Country,
    pagination?:{
        pageSize?:number,
        pageNumber?:number,
    }
        
}
import { TypeOfDirectoryIdEnum } from "./enums/TypeOfDirectoryIdEnum";

export interface GetDirectoryInput {
    id?:string,
    phoneNumber?:string,
    peopleId:string,
    typeOfDirectoryId:TypeOfDirectoryIdEnum
}
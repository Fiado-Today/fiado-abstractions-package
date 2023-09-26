import { TypeOfDirectoryIdEnum } from "./enums/TypeOfDirectoryIdEnum";

export interface GetDirectoryInput {
    id?:string,
    typeOfDirectoryId:TypeOfDirectoryIdEnum
}
import { TypeOfDirectoryIdEnum } from "../General/enum/TypeOfDirectoryIdEnum";

export interface  GetDirectoryInput {
    id?: string;
    phoneNumber?: string;
    typeOfDirectoryId: TypeOfDirectoryIdEnum;
}
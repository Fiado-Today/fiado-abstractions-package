import {TypeOfDirectoryIdEnum} from "./enums/TypeOfDirectoryIdEnum";

export interface InviteInput {
    directoryId: string;
    typeOfDirectoryId: TypeOfDirectoryIdEnum;
    phoneNumber: string;
    name: string;
}
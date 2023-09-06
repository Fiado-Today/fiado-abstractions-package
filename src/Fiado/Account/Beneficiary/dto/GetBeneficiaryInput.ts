import {TypeOfDirectoryIdEnum} from "../../../../General/enum/TypeOfDirectoryIdEnum";

export interface GetBeneficiaryInput {
    directoryId: string,
    typeOfDirectoryId: TypeOfDirectoryIdEnum
}
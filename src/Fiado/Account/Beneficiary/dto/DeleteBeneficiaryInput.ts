import {TypeOfDirectoryIdEnum} from "../../../../General/enum/TypeOfDirectoryIdEnum";

export interface DeleteBeneficiaryInput {
    beneficiaryId: string,
    directoryId: string,
    typeOfDirectoryId: TypeOfDirectoryIdEnum
}
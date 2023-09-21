import {TypeOfDirectoryIdEnum} from "../../../../Directory/enums/TypeOfDirectoryIdEnum";

export interface GetBeneficiaryInput {
    directoryId: string,
    typeOfDirectoryId: TypeOfDirectoryIdEnum
}
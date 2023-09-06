import {Beneficiary} from "../types/Beneficiary";
import {TypeOfDirectoryIdEnum} from "../../../../General/enum/TypeOfDirectoryIdEnum";

export interface CreateBeneficiaryInput {
    beneficiary: Beneficiary,
    directoryId: string,
    typeOfDirectoryId: TypeOfDirectoryIdEnum
}
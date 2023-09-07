import {Address} from "../../../../KYC/types/Address";
import {TypeOfDirectoryIdEnum} from "../../../../General/enum/TypeOfDirectoryIdEnum";

export interface UpdateBeneficiaryInput {
    id: string;
    fullName?: string;
    typeOfRelationshipId?: string;
    percentage?: number;
    address?: Address;
    directoryId: string;
    typeOfDirectoryId: TypeOfDirectoryIdEnum;
}
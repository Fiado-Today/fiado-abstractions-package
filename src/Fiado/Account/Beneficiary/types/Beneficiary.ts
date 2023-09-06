import {Address} from "../../../../KYC/types/Address";
import {TypeOfDirectoryIdEnum} from "../../../../General/enum/TypeOfDirectoryIdEnum";

export type Beneficiary = {
    id: string,
    address?: Address,
    percentage: number,
    typeOfRelationshipId: string,
    fullName: string,
    directoryId?: string,
    typeOfDirectoryId?: TypeOfDirectoryIdEnum,
    createDate?: string,
}
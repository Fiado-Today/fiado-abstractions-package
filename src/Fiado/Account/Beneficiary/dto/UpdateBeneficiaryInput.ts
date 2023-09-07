import {Address} from "../../../../KYC/types/Address";

export interface UpdateBeneficiaryInput {
    fullName?: string;
    typeOfRelationshipId?: string;
    percentage?: number;
    address?: Address;
}
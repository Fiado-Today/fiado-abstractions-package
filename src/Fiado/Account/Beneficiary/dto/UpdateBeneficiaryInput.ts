import {Address} from "../../../../KYC/types/Address";

export interface UpdateBeneficiaryInput {
    id: string;
    fullName?: string;
    typeOfRelationshipId?: string;
    percentage?: number;
    address?: Address;
}
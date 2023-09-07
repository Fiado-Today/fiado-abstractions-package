import {Address} from "../../../../KYC/types/Address";

export interface CreateBeneficiaryInput {
    fullName: string;
    typeOfRelationshipId: string;
    percentage: number;
    address: Address;
}
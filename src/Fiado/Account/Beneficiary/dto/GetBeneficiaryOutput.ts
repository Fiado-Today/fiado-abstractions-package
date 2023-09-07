import {Beneficiary} from "../types/Beneficiary";
import {Pagination} from "../../../Common/Pagination";

export interface GetBeneficiaryOutput {
    beneficiaries: Beneficiary[];
    pagination?: Pagination;
}
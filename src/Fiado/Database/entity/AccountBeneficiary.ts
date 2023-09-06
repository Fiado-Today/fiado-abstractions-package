import {Address} from "../../../KYC/types/Address";
import {TenantEnum} from "../../../General/enum/TenantEnum";
import {TypeOfDirectoryIdEnum} from "../../../General/enum/TypeOfDirectoryIdEnum";

export interface AccountBeneficiary {
    id: string,
    directoryId: string,
    typeOfDirectoryId: TypeOfDirectoryIdEnum,
    address: Address,
    fullName: string,
    percentage: number,
    typeOfRelationshipId: string,
    tenantId: TenantEnum,
    createDate: string,
}
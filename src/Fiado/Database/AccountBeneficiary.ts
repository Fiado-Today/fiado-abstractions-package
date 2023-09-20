import { AddressOutput } from "../../Fiado/Address/AddressOutput";
import {TenantEnum} from "../../General/enum/TenantEnum";
import {TypeOfDirectoryIdEnum} from "../../Directory/enums/TypeOfDirectoryIdEnum";

export interface AccountBeneficiary {
    id: string,
    directoryId: string,
    typeOfDirectoryId: TypeOfDirectoryIdEnum,
    address: AddressOutput,
    fullName: string,
    percentage: number,
    typeOfRelationshipId: string,
    tenantId: TenantEnum,
    createDate: string,
}
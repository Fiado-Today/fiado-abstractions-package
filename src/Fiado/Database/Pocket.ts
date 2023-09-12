import {Country} from "../../General/enum/Country";

export interface Pocket {
    id: string,
    beneficiaryTypeOfDirectoryId: string,
    createDate: string,
    beneficiaryDirectoryId: string,
    accountId: string,
    currentBalance: number,
    balanceLock: number,
    tenantId: string,
    countryId: Country
}
import { BankAccountProviders } from "../../../BankAccount/enums/BankAccountProviders"
import { AccountStatus } from "../../../Fiado/Account/enums/AccountStatus"
import { Country } from "../../../General/enum/Country"


export type AccountOutput = {
    id: string,
    typeOfAccountId: null,
    externalAccountId: string,
    externalSubAccountId: string,
    provider: BankAccountProviders,
    directoryId: string,
    typeOfDirectoryId: string,
    currentBalance: number,
    balanceLock: number,
    countryId: Country
    accountNumber?: string,
    routingNumber?: string,
    status: AccountStatus,
}
import { AccountStatus } from "../../../Fiado/Account/enums/AccountStatus"
import { BankProvider } from "../../../General/enum/BankProvider"
import { Country } from "../../../General/enum/Country"


export type AccountOutput = {
    id: string,
    typeOfAccountId: null,
    externalAccountId: string,
    externalSubAccountId: string,
    provider: BankProvider,
    directoryId: string,
    typeOfDirectoryId: string,
    currentBalance: number,
    balanceLock: number,
    countryId: Country
    accountNumber?: string,
    routingNumber?: string,
    status: AccountStatus,
}
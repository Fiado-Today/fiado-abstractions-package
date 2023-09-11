import { BankProvider } from "../../General/enum/BankProvider";
import { Country } from "../../General/enum/Country";
import { AccountStatus } from "../Account/enums/AccountStatus";


export interface Account {
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
    lastUpdateDate: string,
    accountNumber?: string,
    routingNumber?: string,
    status: AccountStatus,
}
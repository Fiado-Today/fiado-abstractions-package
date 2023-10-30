import {BankAccountProviders} from "../../BankAccount/enums/BankAccountProviders";

export type DirectoryExternalUser = {
    provider: BankAccountProviders,
    user: string
}
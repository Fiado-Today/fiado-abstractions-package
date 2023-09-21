import {AccountOutput} from "../AccountOutput";
import {GetBankAccountOutput} from "../../../BankAccount/Account/GetBankAccountOutput";

export interface GetBackofficeAccountOutput {
    fiadoRegisteredAccounts?: AccountOutput[];
    usRegisteredAccounts?: GetBankAccountOutput[];
}
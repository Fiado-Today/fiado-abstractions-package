import {BankAccountProviders} from "../enums/BankAccountProviders"
import {BankAccountCardProvider} from "../enums/BankAccountCardProvider"
import {BankAccountCardStatus} from "../enums/BankAccountCardStatus"
import {BankAccountCardStatusDetail} from "../enums/BankAccountCardStatusDetail"
import {BankAccountCardType} from "../types/BankAccountCardType"
import {Country} from "../../General/enum/Country"
import {BankAccountCreditOrDebit} from "../enums/BankAccountCreditOrDebit"
import {AddressOutput} from "../../Fiado/Address/AddressOutput";

export interface GetBankAccountCardOutput {
    countryId: Country,
    holder?: {
        name?: string,
        lastName?: string
    },
    expirationMonth?: string,
    expirationYear?: string,
    mii?: BankAccountCardProvider,
    typeOfCardId?: BankAccountCardType,
    creditOrDebit?: BankAccountCreditOrDebit,
    nominated?: boolean,
    pan?: string,
    panLastDigits?: string,
    activationValue?: string,
    provider: {
        id: BankAccountProviders,
        externalUserId?: string,
        externalCardId: string,
        externalAccountId?: string
    },
    address?: AddressOutput,
    status: BankAccountCardStatus,
    statusDetail?: BankAccountCardStatusDetail,
    createDate?: string;
}
import { BankAccountProviders } from "../../BankAccount/enums/BankAccountProviders";
import { Country } from "../../General/enum/Country";
import { CardDeliveryEnum } from "../Card/CardDeliveryEnum";
import { Address } from "./Address";

export type Card = {

    id: string,
    accountId: string,
    activationValue: string,
    address: Address | null,
    shippingAddress?: Address | null,
    countryId: Country,
    createDate: string,
    updateDate: string,
    creditOrDebit: string,
    directoryId: string,
    expirationMonth: string,
    expirationYear: string,
    externalCardId: string,
    externalShippingId?: string | null,
    delivery?: CardDeliveryEnum | null,
    holder?: {
        name: string,
        lastName: string
    },
    imageUrl: string,
    mii: string,
    nominated: boolean,
    pan: string,
    panLastDigits: string,
    provider: {
        id: BankAccountProviders,
        externalUserId?: string,
        externalCardId: string,
        externalAccountId?: string
    },
    status: string,
    tenantId: string,
    typeOfCardId: string,
    typeOfDirectoryId: string,
    activationDate?: string | null,
}

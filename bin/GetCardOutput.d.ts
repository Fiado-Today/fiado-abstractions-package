import { BankAccountProviders } from "./enums/BankAccountProviders";
import { CardProvider } from "./enums/CardProvider";
import { CardStatus } from "./enums/CardStatus";
import { CardStatusDetail } from "./enums/CardStatusDetail";
import { CardType } from "./enums/CardType";
import { Country } from "./enums/Country";
import { CreditOrDebit } from "./enums/CreditOrDebit";
export interface GetCardOutput {
    countryId: Country;
    holder?: {
        name?: string;
        lastName?: string;
    };
    expirationMonth?: string;
    expirationYear?: string;
    mii?: CardProvider;
    typeOfCardId?: CardType;
    creditOrDebit?: CreditOrDebit;
    nominated?: boolean;
    pan?: string;
    panLastDigits?: string;
    activationValue?: string;
    provider: {
        id: BankAccountProviders;
        externalUserId?: string;
        externalCardId: string;
        externalAccountId?: string;
    };
    status: CardStatus;
    statusDetail?: CardStatusDetail;
}

import {BankAccountCardType} from "../../../BankAccount/types/BankAccountCardType";
import {BankAccountCardStatus} from "../../../BankAccount/enums/BankAccountCardStatus";

export interface ExternalProviderCard {
    id: string;
    typeOfCard: BankAccountCardType;
    lastFour: string;
    pan: string;
    creditOrDebit: string;
    expirationYear: string | null;
    expirationMonth: string | null;
    status: BankAccountCardStatus;
    name: string | null;
    provider: string | null;
    issuer: string;
    userId: string;
    affinityGroupId: string;
}
export interface ExternalReplaceCardOutput {
    card?: ExternalProviderCard,
    shipmentId?: string;
}
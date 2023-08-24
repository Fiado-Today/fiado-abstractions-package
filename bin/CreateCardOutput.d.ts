import { BankAccountProviders } from "./enums/BankAccountProviders";
import { CardStatus } from "./enums/CardStatus";
export interface CreateCardOutput {
    externalCardId: string;
    provider: BankAccountProviders;
    status: CardStatus;
}

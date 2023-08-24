import { Address } from "./enums/Address";
import { CardIssuing } from "./enums/CardIssuing";
import { CardType } from "./enums/CardType";
export interface CreateCardInput {
    externalUserId?: string;
    externalAccountId?: string;
    cardType: CardType;
    firstName: string;
    lastName: string;
    address: Address;
    nominated: boolean;
    directoryId: string;
    typeOfDirectoryId: string;
    previousCardId?: string;
    issuing: CardIssuing;
}

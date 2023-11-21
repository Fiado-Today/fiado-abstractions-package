import {BankAccountCardStatus} from "../../../BankAccount/enums/BankAccountCardStatus";

export interface CardInformationItem {
    id: string;
    externalCardId: string;
    panLastDigits: string;
    fiadoHolderName: string;
    externalHolderName: string;
    typeOfCardId: string;
    fiadoStatus: BankAccountCardStatus,
    externalStatus: BankAccountCardStatus,
}

export interface CardInformationOutput {
    cards: CardInformationItem[];
}
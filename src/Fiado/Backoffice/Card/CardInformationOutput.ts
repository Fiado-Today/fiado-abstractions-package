import {BankAccountCardStatus} from "../../../BankAccount/enums/BankAccountCardStatus";
import {AddressOutput} from "../../Address/AddressOutput";

export interface CardInformationItem {
    id: string;
    externalCardId: string;
    panLastDigits: string;
    externalPanLastDigits: string;
    fiadoHolderName: string;
    externalHolderName: string;
    typeOfCardId: string;
    fiadoStatus: BankAccountCardStatus,
    externalStatus: BankAccountCardStatus,
    fiadoShippingAddress: AddressOutput,
    externalShippingAddress: AddressOutput,
    fiadoCreateDate: string;
    externalCreateDate: string;
    activationDate: string;
    updateDate: string;
}

export interface CardInformationOutput {
    cards: CardInformationItem[];
}
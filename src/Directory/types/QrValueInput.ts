import {TypeOfDirectoryIdEnum} from "../enums/TypeOfDirectoryIdEnum";
import {QrTypeEnum} from "../enums/QrTypeEnum";
import {Country} from "../../General/enum/Country";

export type QrValueInput = {
    directoryId: string,
    typeOfDirectoryId: TypeOfDirectoryIdEnum,
    type: QrTypeEnum,
    amount?: number,
    currencyId: Country,
    concept?: string
}
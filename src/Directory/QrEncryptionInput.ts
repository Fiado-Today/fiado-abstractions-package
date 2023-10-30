import {QrOperationTypeEnum} from "./enums/QrOperationTypeEnum";
import {QrValueInput} from "./types/QrValueInput";

export interface QrEncryptionInput {
    operationType: QrOperationTypeEnum;
    value: string | QrValueInput;
}
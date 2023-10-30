import {QrOperationTypeEnum} from "./enums/QrOperationTypeEnum";
import {QrValueInput} from "./types/QrValueInput";

export interface QrEncryptionInput {
    operationType: QrOperationTypeEnum;
    vale: string | QrValueInput;
}
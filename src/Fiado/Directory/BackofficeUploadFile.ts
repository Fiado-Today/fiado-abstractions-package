import {BackofficeUploadFileTypeEnum} from "../../General/enum/BackofficeUploadFileTypeEnum";

export interface BackofficeUploadFile {
    base64: string;
    side?: string;
    type: BackofficeUploadFileTypeEnum;
}
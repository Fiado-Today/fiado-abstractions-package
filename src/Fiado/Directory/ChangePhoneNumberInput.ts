import {BackofficeUploadFile} from "./BackofficeUploadFile";

export interface ChangePhoneNumberInput {
    newPhoneNumber: string;
    directoryId: string;
    evidence: BackofficeUploadFile;
}
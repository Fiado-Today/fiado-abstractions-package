import {S3File} from "./S3File";

export interface SaveDocumentFiles {
    path: string;
    files: Array<S3File>;
}
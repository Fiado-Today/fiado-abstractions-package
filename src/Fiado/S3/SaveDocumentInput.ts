import {SaveDocumentFiles} from "./SaveDocumentFiles";

export interface SaveDocumentInput {
    object: SaveDocumentFiles;
    path: string;
    container?: string;
    contentType?: string;
}
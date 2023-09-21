import { TypeOfDirectoryIdEnum } from "../../Directory/enums/TypeOfDirectoryIdEnum";
import { EntityBase } from "./EntityBase";

export interface EntityBaseWithDirectory extends EntityBase {
    directoryId:string,
    typeOfDirectory:TypeOfDirectoryIdEnum
}
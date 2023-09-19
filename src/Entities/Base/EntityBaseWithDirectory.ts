import { TypeOfDirectoryIdEnum } from "../../General/enum/TypeOfDirectoryIdEnum";
import { EntityBase } from "./EntityBase";

export interface EntityBaseWithDirectory extends EntityBase {
    directoryId:string,
    typeOfDirectory:TypeOfDirectoryIdEnum
}
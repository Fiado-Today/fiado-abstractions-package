import { EntityBase } from "../../Entities/Base/EntityBase";
import { Country } from "../../General/enum/Country";

export interface P2PTransactionCounterUser extends EntityBase {
    fromDirectoryId:string,
    toDirectoryId:string,
    counter:number
}
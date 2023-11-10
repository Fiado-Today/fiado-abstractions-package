import { EntityBase } from "../../Entities/Base/EntityBase";
import { Country } from "../../General/enum/Country";

export interface P2PContactUser extends EntityBase {
    directoryId:string,
    countryId:Country,
    nickname:string,
    directoryIdOfNickname:string,
    isDeleted:boolean
}
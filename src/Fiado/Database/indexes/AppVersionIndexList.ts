import { EntitiesEnum } from "../EntitiesEnum";
import { DatabaseIndexListType } from "./DatabaseIndexListType";

export const AppVersionIndexList:DatabaseIndexListType= { 
    VERSION:{
        schema: EntitiesEnum.APP_VERSION,
        required: [":#version"],
        indexName: "version-index",
        keyCondition: "#version = :version"
    }
}
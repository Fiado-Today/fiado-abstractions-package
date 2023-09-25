import { EntitiesEnum } from "../EntitiesEnum";
import { DatabaseIndexType } from "./DatabaseIndexType";

export const AppVersionIndexList:DatabaseIndexType= { 
    VERSION:{
        schema: EntitiesEnum.APP_VERSION,
        required: [":#version"],
        indexName: "version-index",
        keyCondition: "#version = :version"
    }
}
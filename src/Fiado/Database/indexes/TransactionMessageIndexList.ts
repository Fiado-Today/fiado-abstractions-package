import { EntitiesEnum } from "../EntitiesEnum";
import { DatabaseIndexListType } from "./DatabaseIndexListType";

export const TransactionMessageIndexList:DatabaseIndexListType= { 
    DESTINATION:{
        schema: EntitiesEnum.TRANSACTION_MESSAGE,
        required: [":#destination"],
        indexName: "destination-index",
        keyCondition: "#destination = :destination"
    },
    DIRECTORYID_CREATEDATE:{
        schema: EntitiesEnum.TRANSACTION_MESSAGE,
        required: [":#directoryId"],
        indexName: "directoryId-createDate-index",
        keyCondition: "#directoryId = :directoryId"
    }
}
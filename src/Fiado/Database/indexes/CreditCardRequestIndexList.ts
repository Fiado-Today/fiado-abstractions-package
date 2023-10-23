import { EntitiesEnum } from "../EntitiesEnum";
import { DatabaseIndexListType } from "./DatabaseIndexListType";

export const CreateCreditCardRequestIndexList:DatabaseIndexListType= { 
    OWNER_DIRECTORY_ID:{
        schema: EntitiesEnum.CREDIT_CARD_REQUEST,
        required: [":#ownerDirectoryId"],
        indexName: "ownerDirectoryId-index",
        keyCondition: "#ownerDirectoryId = :ownerDirectoryId"
    },
    DIRECTORY_ID:{
        schema: EntitiesEnum.CREDIT_CARD_REQUEST,
        required: [":#directoryId"],
        indexName: "directoryId-index",
        keyCondition: "#directoryId = :directoryId"
    }
}
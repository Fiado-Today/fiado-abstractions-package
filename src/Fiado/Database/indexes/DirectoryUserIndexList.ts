import { EntitiesEnum } from "../EntitiesEnum";
import { DatabaseIndexListType } from "./DatabaseIndexListType";

export const DirectoryUserIndexList:DatabaseIndexListType= { 

    PHONENUMBER:{
        schema: EntitiesEnum.DIRECTORY_USER,
        required: [":#phoneNumber"],
        indexName: "phoneNumber-index",
        keyCondition: "#phoneNumber = :phoneNumber"
    }
}
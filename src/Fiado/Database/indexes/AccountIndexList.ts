import {EntitiesEnum} from "../EntitiesEnum";
import {DatabaseIndexListType} from "./DatabaseIndexListType";

export const AccountIndexList: DatabaseIndexListType = {
    DIRECTORY_ID: {
        schema: EntitiesEnum.ACCOUNT,
        required: [":#directoryId"],
        indexName: "directoryId-index",
        keyCondition: "#directoryId = :directoryId"
    },
    EXTERNAL_ACCOUNT_ID: {
        schema: EntitiesEnum.ACCOUNT,
        required: [":#externalAccountId"],
        indexName: "externalAccountId-index",
        keyCondition: "#externalAccountId  = :externalAccountId"
    },
    TENANT_ID_CREATE_DATE: {
        schema: EntitiesEnum.ACCOUNT,
        required: [":#tenantId"],
        indexName: "tenantId-createDate-index",
        keyCondition: "#tenantId = :tenantId "
    },
}
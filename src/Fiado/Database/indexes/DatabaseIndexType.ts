import { EntitiesEnum } from "../EntitiesEnum"

export type DatabaseIndexType = {
        schema: string| EntitiesEnum,
        required: string[],
        indexName: string,
        keyCondition: string
    }

import { EntitiesEnum } from "../EntitiesEnum"

export type DatabaseIndexType = {
    [key: string]: {
        schema: EntitiesEnum,
        required: string[],
        indexName: string,
        keyCondition: string
    }
}


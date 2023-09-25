import { EntitiesEnum } from "../EntitiesEnum"

export type DatabaseIndexListType = {
    [key: string]: {
        schema: EntitiesEnum,
        required: string[],
        indexName: string,
        keyCondition: string
    }
}


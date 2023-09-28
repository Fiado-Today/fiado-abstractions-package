import { EntitiesEnum } from "../EntitiesEnum"

export type DatabaseIndexType = {
        schema: EntitiesEnum,
        required: string[],
        indexName: string,
        keyCondition: string
}

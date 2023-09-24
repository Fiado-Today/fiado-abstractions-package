export type DatabaseIndex = {
    [key: string]: {
        required: string[],
        indexName: string,
        keyCondition: string
    }

}


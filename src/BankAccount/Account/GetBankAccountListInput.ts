export interface GetBankAccountListInput {
    externalUserId?: number,
    name?: string,
    lastName?: string,
    phoneNumber?: string,
    email?: string,
    pagination?:{
        pageSize?:number,
        pageNumber?:number,
    }
}
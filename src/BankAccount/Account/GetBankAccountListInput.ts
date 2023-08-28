export interface GetBankAccountListInput {
    externalUserId?: string,
    name?: string,
    lastName?: string,
    phoneNumber?: string,
    email?: string,
    pagination?:{
        pageSize?:number,
        pageNumber?:number,
    }
}
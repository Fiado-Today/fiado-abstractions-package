import { Country } from "../../General/enum/Country"


export type CardBalance = {
    id: string,
    cardPayments: number,
    createDate: string,
    currencyId: Country,
    directoryId: string,
    expensesAmount: number,
    ownerDirectoryId: string,
    ownerTypeOfDirectoryId: string,
    phisicalCardId: string,
    settledBalance: number,
    tenantId: string,
    typeOfDirectoryId: string,
    virtualCardId: string,
    updatedDate: string,
}
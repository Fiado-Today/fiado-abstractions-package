import { EntityBase } from "../../Entities/Base/EntityBase";

export interface PomeloTransaction extends EntityBase {
    id: string,
    transactionId: string | null,
    localTransactionDateTime: string | null,
    transactionType: string | null,
    productType: string | null,
    productProvider: string | null,
    affinityGroupId: string | null,
    userId: string | null,
    cardId: string | null,
    bin: string | null,
    lastFour: string | null,
    origin: string | null,
    merchantId: string | null,
    merchantMcc: string | null,
    merchantName: string | null,
    localAmount: string | null,
    localCurrency: string | null,
    transactionAmount: string | null,
    transactionCurrency: string | null,
    settlementAmount: string | null,
    settlementCurrency: string | null,
    entryMode: string | null,
    status: string | null,
    statusDetail: string | null,
    source: string | null,
    originalTransactionId: string | null,
    countryCode: string | null,
    pointType: string | null,
    clientName: string | null,
    clientCountryCode: string | null,
    amountDetails: string | null,
    approvalNumber: string | null,
    installmentsGracePeriod: string | null,
    installmentsQuantity: string | null,
    installmentsCreditType: string | null,
    documentName: string | null,
    procesDocumentDate: string | null,
    atmFee: string | null,
}
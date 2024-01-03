export enum KycVerificationStatus  {
    SENT = "SENT",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
}

export interface KycVerifications {
    id: string;
    directoryId: string;
    metamapFlowId: string;
    typeOfDocumentId: string;
    createDate: string;
    updateDate: string;
    verificationStatus: KycVerificationStatus;
    verificationResult: string;
}
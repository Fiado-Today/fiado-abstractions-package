export enum KycVerificationStatus {
    CREATED = "CREATED",
    SENT = "SENT",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
}

export interface KycVerifications {
    id: string;
    directoryId: string;
    peopleId: string;
    metamapFlowId: string;
    metamapFlowName: string;
    typeOfDocumentId: string;
    createDate: string;
    updateDate: string;
    verificationStatus: KycVerificationStatus;
    verificationResult: string;
    faceMatchResult: boolean | null;
}
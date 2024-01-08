
export interface KycVerificationMetadata {
    directoryId: string;
    typeOfDirectoryId: string;
    peopleId: string;
    countryId: string;
    typeOfDocumentId: string;
    phoneNumber: string;
    customInput?: boolean;
    userPhotoLink?: string;
    userPhotoLinkHash?: string;
}
export interface KycVerificationsQueueMessage {
    metadata: KycVerificationMetadata;
    documentUploaded: "DOCUMENT_PHOTO" | "VIDEO_SELFIE"
}
import { IdentificationDocumentStatus } from "./IdentificationDocumentStatus"

export type UpdateIdentificatificationDocumentStatus = {
    status: IdentificationDocumentStatus
    verificationId: string
    peopleId: string
}
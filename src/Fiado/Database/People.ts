import { AppEnum } from "../../Directory/enums/AppEnum"
import { IdentificationDocument } from "../Identity/IdentificationDocument"
import { Sex } from "../../KYC/enums/Sex"

export interface People {

    id: string
    createDate: string
    lastUpdateDate: AppEnum | null

    creationMethod: AppEnum | null
    indexName: string | null
    preferredName: string | null

    usSuffix: string | null
    usLastNames: string | null
    usNames: string | null

    latNames: string | null
    latLastNamePaternal: string | null
    latLastNameMaternal: string | null
    aliasNames: string[] | null
    preferredPronoun: string | null

    SSN_ITIN: string | null
    rfc: string | null
    curp: string | null

    passportNumber: string | null
    countryOfPassport: string | null
    documents: IdentificationDocument[] | null

    
    
    countryOfBirth: string | null
    dateOfBirth: string | null
    stateOfBirth: string | null
    nationalities: string[] | null
    docSex: Sex | null
    
    internalEmail: string | null
    occupation: string | null
    operationId: string | null

    tenantId: string | null
    photoOfpersonImageName: string | null
    videoOfPersonImageName: string | null


    usAccount: boolean | null
    magicNumber: string | null
    
    documentVerified: boolean | null
    videoSelfieVerified: boolean | null
    facematchVerified: boolean | null
    fiadoListApproved: boolean | null
    ofacListApproved: boolean | null
    cnbvListApproved: boolean | null
    hasOwner: boolean | null
    older18: boolean | null

    USA_Address: boolean | null
    MEX_Address: boolean | null
    COL_Address: boolean | null
    GTM_Address: boolean | null
    HND_Address: boolean | null
    CRI_Address: boolean | null
    PER_Address: boolean | null

    MEX_ProofAddress: boolean | null

    MXN_SendWish: boolean | null
    COL_SendWish: boolean | null
    GTM_SendWish: boolean | null
    HND_SendWish: boolean | null
    CRI_SendWish: boolean | null
    PER_SendWish: boolean | null
}
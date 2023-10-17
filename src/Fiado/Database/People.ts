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
    incomeSource: string | null
    operationId: string | null

    tenantId: string | null
    photoOfpersonImageName: string | null
    videoOfPersonImageName: string | null

    USA_DebitAccount: boolean 
    MEX_DebitAccount: boolean

    MEX_CreditClient: boolean
    MEX_CreditAdditional: boolean

    magicNumber: boolean

    USA_UploadDocument: boolean
    MEX_UploadDocument: boolean
    videoSelfieVerified: boolean
    MEX_ValidDocument: boolean
    USA_ValidDocument: boolean
    USA_FacematchVerified: boolean | null
    MEX_FacematchVerified: boolean | null

    fiadoListApproved: boolean | null
    ofacListApproved: boolean | null
    cnbvListApproved: boolean | null
    blackListApproved: boolean | null
    whiteList: boolean | null
    hasOwner: boolean
    older18: boolean | null

    USA_Address: boolean
    MEX_Address: boolean
    COL_Address: boolean
    GTM_Address: boolean
    HND_Address: boolean
    CRI_Address: boolean
    PER_Address: boolean

    MEX_ProofAddress: boolean

    MEX_SendWish: boolean
    COL_SendWish: boolean
    GTM_SendWish: boolean
    HND_SendWish: boolean
    CRI_SendWish: boolean
    PER_SendWish: boolean

    USA_DebitAccountWish: boolean
    MEX_DebitAccountWish: boolean

    MEX_CreditAdditionalWish: boolean
    MEX_CreditClientWish: boolean




}



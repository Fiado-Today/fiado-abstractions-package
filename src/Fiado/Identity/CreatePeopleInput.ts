

import { AppEnum } from "../../Directory/enums/AppEnum"
import { Sex } from "../../KYC/enums/Sex"

export interface CreatePeopleInput {

    id: string
    creationMethod?: AppEnum | null
    preferredName?: string | null
    preferredPronoun?: string | null
    countryOfBirth?: string | null
    dateOfBirth?: string | null
    stateOfBirth?: string | null
    nationalities?: string[] | null
    docSex?: Sex | null
    occupation?: string | null

    MXN_SendWish?: boolean | null
    COL_SendWish?: boolean | null
    GTM_SendWish?: boolean | null
    HND_SendWish?: boolean | null
    CRI_SendWish?: boolean | null
    PER_SendWish?: boolean | null
    MEX_CreditAdditionalWish: boolean | null
    USA_DebitAccountWish: boolean
    MEX_CreditClientWish: boolean

}



import { EntitiesEnum } from "../EntitiesEnum";
import { DatabaseIndexListType } from "./DatabaseIndexListType";

export const OnboardingUserIndexList:DatabaseIndexListType= { 
    PHONENUMBER:{
        schema: EntitiesEnum.ONBOARDING_USER,
        required: [":#phoneNumber"],
        indexName: "phoneNumber-index",
        keyCondition: "#phoneNumber = :phoneNumber"
    }
}
import { AppVersionIndexList } from "./AppVersionIndexList";
import { CreateCreditCardRequestIndexList } from "./CreditCardRequestIndexList";
import { DirectoryUserIndexList } from "./DirectoryUserIndexList";
import { OnboardingUserIndexList } from "./OnboardingUserIndexList";
import { TransactionMessageIndexList } from "./TransactionMessageIndexList";

export const IndexList = {
    APPVERSION_IX_VERSION: AppVersionIndexList.VERSION,
    DIRECTORYUSER_IX_PHONENUMBER: DirectoryUserIndexList.PHONENUMBER,
    DIRECTORYUSER_IX_PEOPLE_ID: DirectoryUserIndexList.PEOPLE_ID,
    ONBOARDINGUSER_IX_PHONENUMBER: OnboardingUserIndexList.PHONENUMBER,
    TRANSACTIONMESSAGE_IX_DESTINATION: TransactionMessageIndexList.DESTINATION,
    TRANSACTIONMESSAGE_IX_DIRECTORYID_CREATEDATE: TransactionMessageIndexList.DIRECTORYID_CREATEDATE,
    CREDIT_CARD_REQUEST: CreateCreditCardRequestIndexList.OWNER_DIRECTORY_ID,
    CREDIT_CARD_REQUEST_GEST: CreateCreditCardRequestIndexList.DIRECTORY_ID

}
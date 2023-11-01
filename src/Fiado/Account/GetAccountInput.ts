import { TypeOfDirectoryIdEnum } from "../../Directory/enums/TypeOfDirectoryIdEnum";
import { AccountStatus } from "./enums/AccountStatus";

export interface GetAccountInput {
    id?: string;
    countryId?: string;
    directoryId?: string;
    typeOfDirectoryId?: TypeOfDirectoryIdEnum;
    externalAccountId?: string;
    externalSubAccountId?: string;
    provider?: string;
    status?: AccountStatus;
}
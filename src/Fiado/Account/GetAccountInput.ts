import { TypeOfDirectoryIdEnum } from "../../Directory/enums/TypeOfDirectoryIdEnum";
import { GetListBaseInput } from "../Common/GetListBaseInput";
import { AccountStatus } from "./enums/AccountStatus";

export interface GetAccountInput extends GetListBaseInput {
    id?: string;
    countryId?: string;
    directoryId?: string;
    typeOfDirectoryId?: TypeOfDirectoryIdEnum;
    externalAccountId?: string;
    externalSubAccountId?: string;
    provider?: string;
    status?: AccountStatus;
}
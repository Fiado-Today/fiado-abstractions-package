import {TypeOfDirectoryIdEnum} from "../../../../Directory/enums/TypeOfDirectoryIdEnum";
import {Country} from "../../../../General/enum/Country";
import { GetListBaseInput } from "../../../Common/GetListBaseInput";

export interface GetPocketV2Input extends GetListBaseInput {
    accountId?: string;
    beneficiaryDirectoryId?: string;
    beneficiaryTypeOfDirectoryId?: TypeOfDirectoryIdEnum;
    countryId?: Country;
    directoryId?: string;
    typeOfDirectoryId?: TypeOfDirectoryIdEnum;

}
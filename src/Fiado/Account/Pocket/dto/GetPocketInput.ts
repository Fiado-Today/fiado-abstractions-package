import {TypeOfDirectoryIdEnum} from "../../../../General/enum/TypeOfDirectoryIdEnum";
import {Country} from "../../../../General/enum/Country";

export interface GetPocketInput {
    directoryId: string;
    typeOfDirectoryId: TypeOfDirectoryIdEnum;
    countryId: Country
}
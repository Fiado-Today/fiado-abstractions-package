import {Country} from "../../../../General/enum/Country";
import {ConversionAmount} from "./ConversionAmount";

export type PocketItem = {
    id: string,
    owner: string,
    pocketIsActive: boolean,
    beneficiaryDirectoryId: string,
    beneficiaryTypeOfDirectoryId: string,
    name: string,
    lastName: string,
    balanceLock: number,
    availableAmount: number,
    countryId: Country,
    profileImage: string,
    conversionAmount: ConversionAmount
}
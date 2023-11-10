import { Country } from "../General/enum/Country";

export interface CreateP2PContactInput {
    nickname: string;
    countryId: Country;
    isDeleted: boolean;
    directoryId: string;
    directoryIdOfNickname: string;
}
import {AddressOutput} from "../../Address/AddressOutput";

export interface GetOnboardingByDateRangeOutput {
    accountCreateDate: string;
    addressInfo: AddressOutput[];
    phoneNumber: string;
    directoryId: string;
    referralCode: string;
    referralDirectoryId: string;
}
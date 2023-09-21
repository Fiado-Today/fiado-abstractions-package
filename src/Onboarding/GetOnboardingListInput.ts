import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";
import { TypeOfDirectoryIdEnum } from "../Directory/enums/TypeOfDirectoryIdEnum";
import { DirectoryProfileEnum } from "../Directory/enums/DirectoryProfileEnum";
import { DirectoryScopeEnum } from "../Directory/enums/DirectoryScopeEnum";

export interface GetOnboardingListInput extends GetListBaseInput {
    referralCode?:string | null;
    userProfile?:DirectoryProfileEnum;
    promotedToDirectory?:boolean;
    typeOfDirectoryId:TypeOfDirectoryIdEnum;
    phoneNumber?:string;
    name?:string;
}



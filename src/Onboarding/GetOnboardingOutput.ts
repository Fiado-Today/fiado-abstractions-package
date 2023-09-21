import { TypeOfDirectoryIdEnum } from "../Directory/enums/TypeOfDirectoryIdEnum";
import { DirectoryProfileEnum } from "../Directory/enums/DirectoryProfileEnum";
import { DirectoryScopeEnum } from "../Directory/enums/DirectoryScopeEnum";

export interface GetOnboardingOutput {
    id: string;
    referralDirectoryId: string|null,
    phoneNumber:string,
    referralCode:string|null,
    userProfile: DirectoryProfileEnum,
    otpCOnfirm:string|null,
    promotedToDirectory:boolean;
    scope: Array<DirectoryScopeEnum>;
    createDate:string
    typeOfDirectoryId: TypeOfDirectoryIdEnum

}
import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";
import { DirectoryProfileEnum } from "./enums/DirectoryProfileEnum";
import { DirectoryScopeEnum } from "./enums/DirectoryScopeEnum";
import { DirectoryStatusEnum } from "./enums/DirectoryStatusEnum";
import { TypeOfDirectoryIdEnum } from "./enums/TypeOfDirectoryIdEnum";

export interface GetDirectoryListInput extends GetListBaseInput {
    categoryId?:string|null,
    ownerDirectoryId?:string,
    scope?: Array<DirectoryScopeEnum>
    status?: DirectoryStatusEnum
    userProfile?: DirectoryProfileEnum
    typeOfDirectoryId:TypeOfDirectoryIdEnum,
    peopleId?:string,
    phoneNumber?:string
}
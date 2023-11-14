import {DirectoryScopeEnum} from "../../Directory/enums/DirectoryScopeEnum";
import {DirectoryStatusEnum} from "../../Directory/enums/DirectoryStatusEnum";
import {DirectoryProfileEnum} from "../../Directory/enums/DirectoryProfileEnum";

export interface GetUserListOutputItem {
    id: string;
    phoneNumber: string;
    scope: DirectoryScopeEnum[];
    status: DirectoryStatusEnum;
    userProfile: DirectoryProfileEnum;
    ownerDirectoryId: string;
    peopleId: string;
    indexName: string;
    preferredName: string;
    imageUrl: string;
}
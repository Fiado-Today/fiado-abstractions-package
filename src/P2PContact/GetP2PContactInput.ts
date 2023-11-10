import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";

export interface GetP2PContactInput extends GetListBaseInput {
    id?:string,
    countryId?:string,
    directoryId?:string,
    directoryIdOfNickname?:string,
    nickname?:string,
    isDeleted?:boolean
}
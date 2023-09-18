import { AppPlatform } from "../General/enum/AppPlatform";

export interface GetAppVersionOutput {
    id:string,
    platform:AppPlatform,
    versionAvailable:boolean,
    version:string
}
import { AppPlatform } from "../General/enum/AppPlatform";

export interface AppVersion {
    id:string,
    platform:AppPlatform,
    versionAvailable:boolean,
    version:string
}
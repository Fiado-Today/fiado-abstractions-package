import { AppPlatform } from "../General/enum/AppPlatform";
import { EntityBase } from "./Base/EntityBase";

export interface AppVersion extends EntityBase {
    platform:AppPlatform,
    versionAvailable:boolean,
    version:string,
}
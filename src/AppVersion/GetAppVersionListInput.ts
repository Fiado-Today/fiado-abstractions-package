import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";
import { AppPlatform } from "../General/enum/AppPlatform";

export interface GetAppversionListInput extends GetListBaseInput {
    platform?: AppPlatform,
    version?: string,
    versionAvailable?: boolean
}
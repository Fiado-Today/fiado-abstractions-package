import { GetListBaseOutput } from "../Fiado/Common/GetListBaseOutput";
import { GetAppVersionOutput } from "./GetAppVersionOutput";

export interface GetAppVersionListOutput extends GetListBaseOutput<GetAppVersionOutput>{
    data: GetAppVersionOutput[],
}
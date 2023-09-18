import { GetListBaseOutput } from "../Fiado/Common/GetListBaseOutput";
import { GetAppVersionOutput } from "./GetAppVersionOutput";

export interface GetAppversionListOutput extends GetListBaseOutput<GetAppVersionOutput>{
    data: GetAppVersionOutput[],
}
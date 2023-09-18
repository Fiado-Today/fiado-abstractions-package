import { GetListBaseOutput } from "../Fiado/Common/GetListBaseOutput"
import { GetDirectoryOutput } from "./GetDirectoryOutput"

export interface GetDirectoryListOutput extends GetListBaseOutput<GetDirectoryOutput> {
    data: GetDirectoryOutput[]
}



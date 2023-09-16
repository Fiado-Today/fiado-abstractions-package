import { Pagination } from "../Fiado/Common/Pagination"
import { GetDirectoryOutput } from "./GetDirectoryOutput"

export interface GetDirectoryListOutput {
    accounts: GetDirectoryOutput[]
    pagination: Pagination
}
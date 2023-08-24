import { GetUserOutput } from "./GetUserOutput";

export interface GetUserListOutput {
    users: GetUserOutput[];
    pagination: {
        page: number,
        pageSize: number,
        nextPage: number|null,
        previousPage: number|null,
    }
}
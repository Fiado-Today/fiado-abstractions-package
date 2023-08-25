import { GetBankAccountUserOutput } from "./GetBankAccountUserOutput";
export interface GetBankAccountUserListOutput {
    users: GetBankAccountUserOutput[];
    pagination: {
        page: number;
        pageSize: number;
        nextPage: number | null;
        previousPage: number | null;
    };
}

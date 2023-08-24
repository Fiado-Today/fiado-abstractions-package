import { GetCardInput } from "./GetCardInput";
export interface GetCardListOutput {
    cards: GetCardInput[];
    total: number;
    pagination: {
        page: number;
        pageSize: number;
        nextPage: number | null;
        previousPage: number | null;
    };
}

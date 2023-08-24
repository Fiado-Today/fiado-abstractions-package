import { AccountType } from "./enums/AccountType";
export interface CreateAccountInput {
    externalClientId?: string;
    externalUserId?: string;
    name: string;
    lastName: string;
    type: AccountType;
}

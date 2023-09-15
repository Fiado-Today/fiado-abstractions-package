import { Account } from "../Database/Account";

export type AccountOutput = Omit<Account, 'createDate' | 'updateDate' | 'lastUpdateDate'>;

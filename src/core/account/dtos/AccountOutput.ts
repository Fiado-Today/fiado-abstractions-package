import { Account } from "../../../Fiado/Database/Account";

export type AccountOutput = Omit<Account, 'createDate' | 'updateDate'>;

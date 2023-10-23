import { Account } from "../Database/Account";

export type AccountUserOutput = Omit<Account, 'createDate' | 'updateDate' | 'lastUpdateDate' | 'externalAccountId' | 'externalSubAccountId' | 'provider' | 'tenantId'>;

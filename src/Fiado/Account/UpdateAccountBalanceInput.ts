import { Operation } from "./enums/Operation";

export type TableName = "Account" | "Pocket";

export type UpdateAccountBalanceInput = {
  countryId: string;
  accountId: string;
  tableName: TableName;
  currentBalance?: AccountBalanceOperationObject;
  balanceLock?: AccountBalanceOperationObject;
}

export type AccountBalanceOperationObject = {
    operation: Operation;
    amount: number;
}


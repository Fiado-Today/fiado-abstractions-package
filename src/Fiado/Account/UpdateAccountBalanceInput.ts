import { Operation } from "./enums/Operation";

export type TableName = "Account" | "Pocket";

export type UpdateAccountBalanceInput = {
  countryId: string;
  accountId: string;
  tableName: TableName;
  currentBalance?: operationObject;
  balanceLock?: operationObject;
}

type operationObject = {
    operation: Operation;
    amount: number;
}


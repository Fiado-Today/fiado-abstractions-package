import { CardBalance } from "../Database/CardBalance";

export type CardBalanceDto = Omit<CardBalance, 'createDate' | 'updateDate' | 'tenantId' | 'phisicalCardId' | 'virtualCardId'>;

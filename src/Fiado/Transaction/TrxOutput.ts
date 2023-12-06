import { Trx } from "../Database/Trx";


export type TrxOutput = Omit<Trx, 'createDate'>;

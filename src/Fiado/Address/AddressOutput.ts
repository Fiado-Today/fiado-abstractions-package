import { Address } from "../Database/Address";


export type AddressOutput = Omit<Address, 'createDate'>;

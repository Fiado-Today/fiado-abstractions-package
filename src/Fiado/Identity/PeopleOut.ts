import { People } from "../Database/People";

export type PeopleOut = Omit<People, 'createDate' | 'lastUpdateDate'>;

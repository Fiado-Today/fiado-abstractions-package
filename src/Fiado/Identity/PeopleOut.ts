import { People } from "../Database/People";

export type PeopleOutput = Omit<People, 'createDate' | 'lastUpdateDate'>;

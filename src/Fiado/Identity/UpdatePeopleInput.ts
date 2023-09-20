import { People } from "../Database/People";

export interface UpdatePeopleInput extends Partial<Omit<People, 'createDate' | 'lastUpdateDate'>> {
 
}
import { PeopleStepEnum } from "./PeopleStepEnum";


export type UpdatePeopleStep = {
    directoryId: string;
    step: PeopleStepEnum;
    value: boolean;

}
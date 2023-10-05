import { PeopleStepEnum } from "./PeopleStepEnum";


export type UpdatePeopleStepInput = {
    directoryId: string;
    step: PeopleStepEnum;
    value: boolean;
    verificationId: string;

}
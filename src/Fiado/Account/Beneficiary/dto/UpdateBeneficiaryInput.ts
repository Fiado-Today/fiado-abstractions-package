import {AddressOutput} from "../../../Address/AddressOutput";
import {TypeOfDirectoryIdEnum} from "../../../../General/enum/TypeOfDirectoryIdEnum";

export interface UpdateBeneficiaryInput {
    fullName?: string;
    typeOfRelationshipId?: string;
    percentage?: number;
    address?: AddressOutput;


    directoryId?: string;
    typeOfDirectoryId?: TypeOfDirectoryIdEnum;
}
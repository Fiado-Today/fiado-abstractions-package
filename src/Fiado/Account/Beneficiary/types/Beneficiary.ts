import {AddressOutput} from "../../../Address/AddressOutput";
import {TypeOfDirectoryIdEnum} from "../../../../Directory/enums/TypeOfDirectoryIdEnum";

export type Beneficiary = {
    id: string,
    address?: AddressOutput,
    percentage: number,
    typeOfRelationshipId: string,
    fullName: string,
    directoryId?: string,
    typeOfDirectoryId?: TypeOfDirectoryIdEnum,
    createDate?: string,
}
import { CreditCardRequestStatus } from "../../CreditCardRequest/enums/CreditCardRequestStatus";
import { DirectoryProfileEnum } from "../../Directory/enums/DirectoryProfileEnum";
import { EntityBase } from "../../Entities/Base/EntityBase";

export interface CreditCardRequest extends EntityBase {
    directoryId: string;
    ownerDirectoryId: string;
    initatedBy: DirectoryProfileEnum;
    status: CreditCardRequestStatus;
}
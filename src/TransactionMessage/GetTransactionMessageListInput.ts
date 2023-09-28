import { GetListBaseInput } from "../Fiado/Common/GetListBaseInput";
import { MessageTypeEnum, channelType, notificationStatus } from "../Fiado/MessageNotification/MessageNotification";


export interface GetTransactionMessageListInput extends GetListBaseInput {
    beneficiaryDirectoryId?: string|null,
    beneficiaryTypeOfDirectoryId?: string|null,
    channelType?: channelType,
    destination?:string,
    referenceMessageId?:string|null,
    status?:notificationStatus,
    subject?:string|null,
    templateId?:string,
    transactionNumber?:string|null,
    typeOfMessage?:MessageTypeEnum,
}
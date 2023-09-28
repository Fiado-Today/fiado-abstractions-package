
import { EntityBaseWithDirectory } from "../../Entities/Base/EntityBaseWithDirectory";
import { MessageTypeEnum, channelType, notificationStatus } from "../MessageNotification/MessageNotification";


export interface TransactionMessage extends EntityBaseWithDirectory{
    beneficiaryDirectoryId: string|null,
    beneficiaryTypeOfDirectoryId: string|null,
    channelType: channelType,
    destination:string,
    message:any,
    parameters:{
        var5:any,
        var4:any,
        var3:any,
        var2:any,
        var1:any
    },
    referenceMessageId:string|null,
    status:notificationStatus,
    subject:string|null,
    templateId:string,
    transactionNumber:string|null,
    typeOfMessage:MessageTypeEnum,
}

export interface NotificationPush 
{
    referenceMessageId: string|null;
    channelType: channelType;
    country: string;
    beneficiaryDirectoryId: string|null;
    beneficiaryTypeOfDirectoryId: string|null;
    destination: string|null;
    language:"ES";
    status: string,
    messageType: string;
    directoryId: string | null;
    var1: string|null;
    var2: string|null;
    var3: string|null;
    var4: string|null;
    typeOfDirectory: string;
    options: any;
}



export enum channelType{
    SMS = "SMS",
    PUSH_NOTIFICATION = "PUSH_NOTIFICATION",

}

export enum notificationStatus
{
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    REJECTED = "REJECTED",
    DELETED = "DELETED",
    CREATED = "CREATED",
    VALIDATED= "VALIDATED"
}

export enum TypeOfProductEnum{
    OTP_CODE= "OTP_CODE",
}

export enum MessageTypeEnum {
    ADDITIONAL_REQUEST_MESSAGE =  "ADDITIONAL_REQUEST_MESSAGE",
    CASHOUT_CARDLESS_MXN = "CASHOUT_CARDLESS_MXN",
    CIP_PROCESS_NOTIFICATION = "CIP_PROCESS_NOTIFICATION",
    CIP_PROCESS_UPDATE = "CIP_PROCESS_UPDATE",
    DUPLICATED_ACCOUNT = "DUPLICATED_ACCOUNT",
    FACILITA_SEND_MONEY = "FACILITA_SEND_MONEY",  
    INVITE_TO_FIADO_APP = "INVITE_TO_FIADO_APP",  
    ISSUED_CARD = "ISSUED_CARD",  
    ISSUED_CARD_SMS = "ISSUED_CARD_SMS",  
    KYC_PROCESS = "KYC_PROCESS",  
    OTP_CODE = "OTP_CODE",  
    PASSWORD_RECOVERY_SMS = "PASSWORD_RECOVERY_SMS",  
    PUSH_RECIEVE_MONEY = "PUSH_RECIEVE_MONEY",  
    REFRESH_TOKEN = "REFRESH_TOKEN",  
    REQUEST_FIADO_SHARE = "REQUEST_FIADO_SHARE",  
    REQUEST_FIADO_SHARE_CANCEL = "REQUEST_FIADO_SHARE_CANCEL",  
    WARNING_POMNELO_CONCILIATION = "WARNING_POMNELO_CONCILIATION",  
    WARNING_STP_BALANCE = "WARNING_STP_BALANCE",  
}
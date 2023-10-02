import {KycProviderEnum} from "../../KYC/enums/KycProviderEnum";
import {TypeOfDirectoryIdEnum} from "../../Directory/enums/TypeOfDirectoryIdEnum";

export interface KycData {
    id: string;
    "age-check": any[] | null;
    "alteration-detection": any[] | null;
    countryId: string;
    directoryId: string;
    "document-reading": any[] | null;
    documentNumber: string | null;
    facematch: any[] | null;
    liveness: any[] | null;
    "mexican-curp-validation": any[] | null;
    "mexican-ine-validation": any[] | null;
    "mexican-pep-validation": any[] | null;
    "premium-aml-watchlists-validation": any[] | null;
    "provider": KycProviderEnum;
    "template-matching": any[] | null;
    typeOfDirectoryId: TypeOfDirectoryIdEnum;
    typeOfDocumentId: string;
    updateDate: string;
    verification_completed: any[] | null;
    verification_expired: any[] | null;
    verification_inputs_completed: any[] | null;
    verification_started: any[] | null;
    verification_updated: any[] | null;
    verificationId: string;
    watchlists: any[] | null;
}
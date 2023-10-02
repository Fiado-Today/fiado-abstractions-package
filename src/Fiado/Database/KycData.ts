import {KycProviderEnum} from "../../KYC/enums/KycProviderEnum";
import {TypeOfDirectoryIdEnum} from "../../Directory/enums/TypeOfDirectoryIdEnum";

export interface KycData {
    id: string;
    "age-check": string | null;
    "alteration-detection": string | null;
    countryId: string;
    directoryId: string;
    "document-reading": string | null;
    documentNumber: string | null;
    facematch: string | null;
    liveness: string | null;
    "mexican-curp-validation": string | null;
    "mexican-ine-validation": string | null;
    "mexican-pep-validation": string | null;
    "premium-aml-watchlists-validation": string | null;
    "provider": KycProviderEnum;
    "template-matching": string | null;
    typeOfDirectoryId: TypeOfDirectoryIdEnum;
    updateDate: string;
    verification_completed: string | null;
    verification_expired: string | null;
    verification_inputs_completed: string | null;
    verification_started: string | null;
    verification_updated: string | null;
    verificationId: string;
    watchlists: string;
}
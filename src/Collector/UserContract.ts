export interface UserContract {
    contractVersion: string;
    creditNotional: number;
    creditTotal: number;
    createdDate: string;
    paymentDate: string;
    creditContractId: string;
    peopleId:string;
    names: string;
    firstLastName: string;
    secondLastName: string;
    fullName: string;
    dob: string;
    nationality: string;
    directoryId: string;
    hash?: string;
}
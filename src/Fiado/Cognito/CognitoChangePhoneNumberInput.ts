export interface CognitoChangePhoneNumberInput {
    username: string;
    phoneNumber: string;
    phoneNumberVerified: boolean;
    email: string | null;
    emailVerified: string;
    userType: string;
}
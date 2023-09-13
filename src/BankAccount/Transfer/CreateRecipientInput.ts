export interface CreateRecipientInput {
    sender_user_id?: number;
    program_id?: number;
    transfer_method: number;
    external_account_number: string;
    external_routing_number: String;
}
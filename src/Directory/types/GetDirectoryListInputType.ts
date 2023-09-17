import { GetDirectoryListInput } from "../GetDirectoryListInput";
import { GetDirectoryListOutput } from "../GetDirectoryListOutput";

export type GetDirectoryListInputType <T extends GetDirectoryListInput> = T extends GetDirectoryListInput
? GetDirectoryListOutput
// : T extends CreateDirectoryUsrMerchantInput
// ? CreateDirectoryUsrMerchantOutput
: GetDirectoryListOutput;
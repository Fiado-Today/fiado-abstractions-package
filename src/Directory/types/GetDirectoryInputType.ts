import { GetDirectoryInput } from "../GetDirectoryInput";
import { GetDirectoryUserInput } from "../User/GetDirectoryUserInput";
import { GetDirectoryUserOutput } from "../User/GetDirectoryUserOutput";

export type GetDirectoryInputType <T extends GetDirectoryInput> = T extends GetDirectoryUserInput
? GetDirectoryUserOutput
// : T extends CreateDirectoryUsrMerchantInput
// ? CreateDirectoryUsrMerchantOutput
: GetDirectoryUserOutput;
import { CreateDirectoryInput } from "../CreateDirectoryInput";
import { CreateDirectoryUserInput } from "../User/CreateDirectoryUserInput";
import { CreateDirectoryUserOutput } from "../User/CreateDirectoryUserOutput";

export type CreateDirectoryInputType <T extends CreateDirectoryInput> = T extends CreateDirectoryUserInput
? CreateDirectoryUserOutput
// : T extends CreateDirectoryUsrMerchantInput
// ? CreateDirectoryUsrMerchantOutput
: CreateDirectoryUserOutput;
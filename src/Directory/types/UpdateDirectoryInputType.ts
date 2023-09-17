import { UpdateDirectoryInput } from "../UpdateDirectoryInput";
import { UpdateDirectoryOutput } from "../UpdateDirectoryOutput";

export type UpdateDirectoryInputType <T extends UpdateDirectoryInput> = T extends UpdateDirectoryInput
? UpdateDirectoryOutput
// : T extends CreateDirectoryUsrMerchantInput
// ? CreateDirectoryUsrMerchantOutput
: UpdateDirectoryOutput;
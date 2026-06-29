import { z } from "zod";
import { imageSchema } from "./file.schema";


export const identityVerificationSchema = z.object({
    idFrontImage: imageSchema,

    idBackImage: imageSchema,

    selfieWithId: imageSchema,
});

export type IdentityVerificationFormValues = z.infer<
    typeof identityVerificationSchema
>;
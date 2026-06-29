import { IdentityVerificationFormValues } from "@/features/verification/types/verification.types";

export function createIdentityVerificationFormData(
    values: IdentityVerificationFormValues,
): FormData {
    const formData = new FormData();

    formData.append("IdFrontImage", values.idFrontImage!);
    formData.append("IdBackImage", values.idBackImage!);
    formData.append("SelfieWithId", values.selfieWithId!);

    return formData;
}
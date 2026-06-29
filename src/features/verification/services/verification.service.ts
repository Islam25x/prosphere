import { apiClient } from "@/infrastructure/api/api-client";

import { VERIFICATION_ENDPOINTS } from "../constants/verification-endpoints";
import { VerifyIdentityPayload } from "../types/verification.types";
import { createIdentityVerificationFormData } from "../utils/form-data";
import type { ApiResult } from "@/shared/types/result";

export const verificationService = {
    verifyIdentity(
        payload: VerifyIdentityPayload,
    ): Promise<ApiResult<void>> {
        const formData = createIdentityVerificationFormData(payload);

        return apiClient.post<
            ApiResult<void>,
            FormData
        >(
            `${VERIFICATION_ENDPOINTS.identity}?userId=${payload.userId}`,
            formData,
        );
    }
}
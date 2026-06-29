export type IdentityVerificationFormValues = {
    idFrontImage: File | null;
    idBackImage: File | null;
    selfieWithId: File | null;
};
export interface VerifyIdentityPayload {
    userId: string;
    idFrontImage: File;
    idBackImage: File;
    selfieWithId: File;
}
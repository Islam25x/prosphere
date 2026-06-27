import { ConfirmEmailPage } from "@/features/auth/pages/confirm-email-page";

type PageProps = {
    searchParams: Promise<{
        userId?: string;
        token?: string;
    }>;
};

export default async function Page({ searchParams }: PageProps) {
    const {userId , token} = await searchParams;

    return (
        <ConfirmEmailPage
            userId={userId}
            token={token}
        />
    );
}
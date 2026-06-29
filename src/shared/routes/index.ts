export const ROUTES = {
    home: "/",

    auth: {
        login: "/",
        confirmEmail: "/confirm-email",
        resetPassword: "/reset-password",
    },
    verification: {
        verification: "/verification",
        identityVerification: "/verification/identity",
        pending: "/verification/pending",
    },
    dashboard: "/dashboard",

    profile: "/profile",

    projects: "/projects",
} as const;
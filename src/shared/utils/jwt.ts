export function decodeJwtSegment(
    segment: string,
): string {
    const normalizedSegment = segment
        .replace(/-/g, "+")
        .replace(/_/g, "/");

    const padding =
        "=".repeat(
            (4 - (normalizedSegment.length % 4)) % 4,
        );

    return atob(
        normalizedSegment + padding,
    );
}

export function decodeJwtPayload<T>(
    token: string,
): T | null {
    const payloadSegment =
        token.split(".")[1];

    if (!payloadSegment) {
        return null;
    }

    try {
        const payload =
            decodeJwtSegment(payloadSegment);

        return JSON.parse(payload) as T;
    } catch {
        return null;
    }
}
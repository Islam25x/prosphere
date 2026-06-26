import { isRecord } from "../utils/type-guards";


export function unwrapEnvelope(
    payload: unknown,
): unknown {
    if (!isRecord(payload)) {
        return payload;
    }

    if ("data" in payload) {
        return payload.data;
    }

    return payload;
}

// بنحتاجها في الحاله دي

// {
//   "data": {
//     "token": "...",
//     "refreshToken": "..."
//   }
// }
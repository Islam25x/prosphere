import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024; // 1 MB

const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
];

export const imageSchema = z
    .instanceof(File, {
        message: "Image is required.",
    })
    .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Only JPG and PNG images are allowed.",
    )
    .refine(
        (file) => file.size <= MAX_FILE_SIZE,
        "Image size must be less than 1 MB.",
    );
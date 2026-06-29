import { CheckCircle2, UploadCloud } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { IdentityVerificationFormValues } from "../schemas/identity.schema";
import { UseFormReturn } from "react-hook-form";

type UploadFieldProps = {
    form: UseFormReturn<IdentityVerificationFormValues>
    title: string;
    name: keyof IdentityVerificationFormValues;
    description: string;
    icon: React.ReactNode;
};

export function UploadField({
    form,
    name,
    title,
    description,
    icon,
}: UploadFieldProps) {

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        form.setValue(name, file, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };
    const selectedFile = form.watch(name);
    const error = form.formState.errors[name];
    return (
        <div className="flex items-center justify-between rounded-2xl border p-4 transition-colors hover:border-primary/40">
            <div className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary flex h-11 w-11 items-center justify-center rounded-xl">
                    {icon}
                </div>

                <div>
                    <h3 className="font-semibold">{title}</h3>

                    <p className="text-muted-foreground text-sm">
                        {description}
                    </p>
                </div>
            </div>

            <input
                id={String(name)}
                type="file"
                className="hidden"
                accept="image/png,image/jpeg"
                onChange={handleFileChange}
            />
            {error && (
                <p className="mt-2 text-sm text-destructive">
                    {error.message}
                </p>
            )}
            <label htmlFor={name}>
                <Button
                    type="button"
                    variant="outline"
                    asChild
                >
                    <span className="flex items-center gap-2">
                        {selectedFile ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                            <UploadCloud className="h-4 w-4" />
                        )}

                        {selectedFile ? "Uploaded" : "Upload"}
                    </span>
                </Button>
            </label>
        </div>
    );
}
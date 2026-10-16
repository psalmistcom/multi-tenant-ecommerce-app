import { useState } from "react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { Link, useLocation } from "react-router";
import { Button } from "../../components/ui/button";
import { Spinner } from "../../components/ui/spinner";
import { ShieldCheckIcon } from "lucide-react";
import { useAppDispatch } from "../../hooks/use-store";
import PasswordInput from "../../components/PasswordInput";

export default function ResetPassword() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const state = location.state as {
    email?: string;
    resetToken?: string;
  } | null;

  const email = state?.email;
  const resetToken = state?.resetToken;

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const misMatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (misMatch) {
      setError("Passwords do not match");
      return;
    }

    if (!resetToken) {
      setError("Reset token not found. Please request a new password reset.");
      return;
    }
    setIsSubmitting(true);

    try {
      setTimeout(() => {
        setPassword("");
        setConfirmPassword("");
      }, 2000);
    } catch (error) {
      setError(
        `Something went wrong: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-2xl font-bold">Set a New Password</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">
        {email ? (
          <>
            New password for{" "}
            <span className="font-medium text-foreground">{email}</span>
          </>
        ) : (
          "Choose a new password for your account."
        )}
      </p>
      <form className="mt-7" onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password">Password</FieldLabel>
            </div>
            <PasswordInput
              id="password"
              className="h-11"
              placeholder="••••••••"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
            />
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>
            </div>
            <PasswordInput
              id="confirm-password"
              className="h-11"
              placeholder="••••••••"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isSubmitting}
            />
            {misMatch && <FieldError>Passowrds don't match</FieldError>}
          </Field>

          {error && <p className="my-0 text-sm text-destructive">{error}</p>}
          <Button type="submit" className="mt-6 h-11 w-full">
            {isSubmitting ? (
              <>
                <Spinner className="size-4" />
                Updating...
              </>
            ) : (
              "Update Password"
            )}
          </Button>
        </FieldGroup>
      </form>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheckIcon className="size-3.5" />
        Protected by SSO and 2-factor verification
      </div>
    </div>
  );
}

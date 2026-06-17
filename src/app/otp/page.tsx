import { AuthCard, AuthSplit } from "@/components/AuthScreens";

export default function OtpPage() {
  return (
    <AuthSplit variant="secure">
      <AuthCard
        title="OTP Verification"
        subtitle="Kindly fill input the OTP sent to your mail"
        button="Verify"
        href="/dashboard"
        otp
      />
    </AuthSplit>
  );
}

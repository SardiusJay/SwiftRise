import { AuthCard, AuthSplit } from "@/components/AuthScreens";

export default function ForgotPasswordPage() {
  return (
    <AuthSplit>
      <AuthCard
        title="Forgot Password"
        fields={[
          {
            label: "Username/Email Address",
            placeholder: "olamidejohn4life@gmail.com",
          },
        ]}
        button="Send OTP"
        href="/otp"
      />
    </AuthSplit>
  );
}

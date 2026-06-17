import { AuthCard, AuthSplit } from "@/components/AuthScreens";

export default function LoginPage() {
  return (
    <AuthSplit>
      <AuthCard
        title="Login"
        fields={[
          { label: "Username/Email Address", placeholder: "olamide11" },
          { label: "Password", placeholder: "Enter Password", type: "password", icon: "⌘" },
        ]}
        button="Io"
        forgot
        href="/dashboard"
      />
    </AuthSplit>
  );
}

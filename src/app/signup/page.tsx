import { AuthCard, AuthSplit } from "@/components/AuthScreens";

export default function SignupPage() {
  return (
    <AuthSplit>
      <AuthCard
        title="Sign Up"
        fields={[
          { label: "Full Name", placeholder: "olamide john", icon: "▭" },
          { label: "Username", placeholder: "olamide11" },
          { label: "Email Address", placeholder: "olamidejon@gmail.com" },
          { label: "Choose Password", placeholder: "Enter Password", type: "password", icon: "⌘" },
          { label: "Confirm Password", placeholder: "Enter Password", type: "password", icon: "⌘" },
        ]}
        button="Sign Up"
        href="/otp"
      />
    </AuthSplit>
  );
}

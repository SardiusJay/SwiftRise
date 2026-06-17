import { AuthCard, CenterAuth } from "@/components/AuthScreens";

export default function NewPasswordPage() {
  const card = (
    <AuthCard
      title="New Password"
      fields={[
        { label: "Choose Password", placeholder: "Enter Password", type: "password", icon: "⌘" },
        { label: "Confirm Password", placeholder: "Enter Password", type: "password", icon: "⌘" },
      ]}
      button="Update"
      href="/dashboard/profile"
    />
  );

  return <CenterAuth>{card}</CenterAuth>;
}

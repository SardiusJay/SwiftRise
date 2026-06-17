import { AuthCard, CenterAuth } from "@/components/AuthScreens";

export default function WalletSettingsPage() {
  return (
    <CenterAuth>
      <AuthCard
        title="Wallet settings"
        fields={[
          { label: "New Wallet address", placeholder: "Abc536ertyhgdshgdxgdhuje" },
        ]}
        button="Update"
        href="/dashboard/profile"
      />
    </CenterAuth>
  );
}

import Link from "next/link";

type ShellProps = {
  title: string;
  active: "home" | "investment" | "bounty" | "profile";
  children: React.ReactNode;
};

const nav = [
  { label: "Home", href: "/dashboard", icon: "⌂", key: "home" },
  { label: "Investment", href: "/dashboard/investment", icon: "▣", key: "investment" },
  { label: "Bounty", href: "/dashboard/bounty", icon: "●●", key: "bounty" },
  { label: "Profile", href: "/dashboard/profile", icon: "●", key: "profile" },
] as const;

export function AppShell({ title, active, children }: ShellProps) {
  return (
    <main className="min-h-screen bg-[#fbfbfb] text-[#4a4a4a]">
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-[265px] bg-[#174f63] text-white md:block">
        <Link className="mx-9 mt-11 flex items-center gap-3" href="/">
          <span className="grid size-10 place-items-center rounded-full bg-white text-[#2e9bcc]">
            ⟲
          </span>
          <span className="font-serif text-[34px] font-bold">SwiftRise</span>
        </Link>
        <nav className="mt-24 space-y-3 px-8">
          {nav.map((item) => (
            <Link
              className={`flex h-[46px] items-center gap-4 px-3 text-[14px] font-semibold ${
                active === item.key ? "bg-[#2f8cb1]" : ""
              }`}
              href={item.href}
              key={item.key}
            >
              <span className="grid size-21 min-w-21 place-items-center text-xl">
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="md:pl-[265px]">
        <header className="sticky top-0 z-10 flex h-[73px] items-center justify-between border border-[#c5dce6] bg-[#ecfaff] px-6 md:px-11">
          <h1 className="page-title text-[26px]">{title}</h1>
          <div className="flex items-center gap-8">
            <span className="relative text-[22px]">♧<i className="absolute -right-1 top-0 size-2 rounded-full bg-[#c94b62]" /></span>
            <span className="grid size-11 place-items-center rounded-full border border-[#18a1e2] bg-[#ffd7c7] text-xl">
              👤
            </span>
          </div>
        </header>
        <div className="px-5 py-6 md:px-10">{children}</div>
      </section>
    </main>
  );
}

export function BackLink({ label = "Back", href }: { label?: string; href: string }) {
  return (
    <Link className="mb-14 inline-flex items-center gap-6 font-serif text-[20px] font-bold" href={href}>
      <span className="text-[34px] leading-none">←</span>
      {label}
    </Link>
  );
}

export function Progress({ value, width = "100%" }: { value: number; width?: string }) {
  return (
    <div className="progress-track" style={{ width }}>
      <div className="progress-fill" style={{ width: `${value}%` }} />
    </div>
  );
}

export function StatusPill({ children, tone }: { children: React.ReactNode; tone: "success" | "danger" | "warning" }) {
  const classes = {
    success: "bg-[#bff9dd] text-[#00a64c]",
    danger: "bg-[#fee5e5] text-[#ff3c3c]",
    warning: "bg-[#fff0c8] text-[#c88b00]",
  };

  return <span className={`rounded-full px-3 py-2 text-sm ${classes[tone]}`}>{children}</span>;
}

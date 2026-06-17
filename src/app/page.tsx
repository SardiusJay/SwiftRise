import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#e6f7fd] text-[#174f63]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12">
        <Link className="mb-16 flex items-center gap-3" href="/">
          <span className="grid size-11 place-items-center rounded-full bg-white text-[#2e9bcc]">
            ⟲
          </span>
          <span className="font-serif text-[38px] font-bold text-[#174f63]">
            SwiftRise
          </span>
        </Link>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="font-serif text-[20px] text-[#2f8cb1]">
              Secure, transparent crypto investing
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-[58px] font-bold leading-[1.05] text-[#0f3f51]">
              Invest smart, grow faster, and manage rewards in one dashboard.
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-8 text-[#55677c]">
              This landing page now connects into the full SwiftRise interface
              from the Figma export: sign up, login, OTP, investments, bounty,
              deposits, withdrawals, and profile settings.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="sr-button w-[170px]" href="/signup">
                Sign Up
              </Link>
              <Link
                className="inline-flex min-h-[55px] w-[170px] items-center justify-center rounded-[7px] border border-[#2f8cb1] bg-white font-bold text-[#2f8cb1]"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="inline-flex min-h-[55px] w-[190px] items-center justify-center rounded-[7px] bg-[#174f63] font-bold text-white"
                href="/dashboard"
              >
                View Dashboard
              </Link>
            </div>
          </div>
          <div className="sr-card p-5 shadow-sm">
            <div className="rounded-[8px] bg-[#174f63] p-6 text-white">
              <p className="font-serif">Investment Balance</p>
              <p className="mt-3 font-serif text-[34px] font-bold">$ 10,000</p>
            </div>
            <div className="mt-5 space-y-3">
              {["Home", "Investment", "Bounty", "Profile"].map((item) => (
                <div
                  className="flex items-center justify-between rounded-[6px] bg-[#f7fbfd] px-4 py-3 font-serif"
                  key={item}
                >
                  <span>{item}</span>
                  <span>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

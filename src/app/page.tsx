import {
  BadgeDollarSign,
  BarChart3,
  CircleDollarSign,
  Coins,
  Handshake,
  LockKeyhole,
  Menu,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const steps = [
  "Choose from 12 professionally designed investment tiers",
  "Start with as little as $10 USDT, up to $75,000",
  "Get both your capital and interest in 6 months, split into 12 bi-weekly payouts",
  "Withdraw capital + interest every 14 days",
];

const reasons = [
  {
    title: "Low Entry Barrier",
    text: "Start with just $10 USDT.",
    icon: BarChart3,
    tone: "text-[#f59e0b]",
  },
  {
    title: "Predictable Growth",
    text: "Earn a steady 6% over 6 months.",
    icon: TrendingUp,
    tone: "text-[#1683a8]",
  },
  {
    title: "Regular Payouts",
    text: "Bi-weekly returns for consistent liquidity.",
    icon: WalletCards,
    tone: "text-[#22a06b]",
  },
  {
    title: "Fully Transparent",
    text: "No hidden fees, no lock-in traps.",
    icon: CircleDollarSign,
    tone: "text-[#ef5d6f]",
  },
  {
    title: "Secure Crypto Handling",
    text: "Built with blockchain integrity.",
    icon: ShieldCheck,
    tone: "text-[#16a3a8]",
  },
  {
    title: "Reputation First",
    text: "Trusted by users, built for sustainability.",
    icon: Handshake,
    tone: "text-[#8b5cf6]",
  },
];

const testimonials = [
  "I started with just $250 and was amazed by the consistent payouts. SwiftRise really delivers on their promises!",
  "The bi-weekly payouts give me confidence and steady income. Perfect for my retirement planning strategy.",
  "Transparent, reliable, and exactly what they promise. SwiftRise has earned my trust and continued investment.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eaf7fb] text-[#4b5560]">
      <section className="relative overflow-hidden bg-[#319ac1] text-white">
        <GridBackground />
        <header className="relative z-20 px-5 pt-5 sm:px-8">
          <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-lg bg-white px-5 py-3 text-[#319ac1] shadow-[0_16px_40px_rgba(21,84,111,0.12)]">
            <a className="flex items-center gap-3" href="#">
              <LogoMark />
              <span className="font-serif text-2xl font-bold tracking-normal sm:text-3xl">
                SwiftRise
              </span>
            </a>

            <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
              <a href="#features">Features</a>
              <a href="#faq">FAQ</a>
              <a href="#testimonials">Testimonials</a>
            </div>

            <a
              className="hidden rounded-md bg-[#36a5d2] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#238db9] sm:inline-flex"
              href="#invest"
            >
              Invest Now
            </a>
            <button
              aria-label="Open menu"
              className="grid size-10 place-items-center rounded-md border border-[#319ac1]/20 md:hidden"
              type="button"
            >
              <Menu size={20} />
            </button>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl flex-col items-center px-5 pb-0 pt-10 text-center sm:px-8 lg:min-h-[700px]">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Grow with confidence - Invest Smarter with SwiftRise
          </h1>
          <p className="mt-4 text-xl font-medium text-white/90 sm:text-2xl">
            Secure, Transparent and Rising
          </p>
          <a
            className="mt-7 inline-flex min-w-72 items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-semibold text-[#36a5d2] shadow-sm transition hover:bg-[#f2fbff]"
            href="#invest"
          >
            Invest Now
          </a>

          <HeroInvestmentVisual />
        </div>
      </section>

      <section id="invest" className="bg-[#eaf7fb] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.62fr_1fr] lg:items-center">
          <div>
            <span className="rounded-full bg-[#c9edf8] px-4 py-2 text-xs font-bold text-[#2b8fb6]">
              Step-by-Step
            </span>
            <h2 className="mt-5 text-5xl font-extrabold leading-tight tracking-normal text-[#238db9] sm:text-6xl">
              HOW
              <br />
              IT
              <br />
              WORKS
            </h2>
            <p className="mt-7 max-w-sm text-sm font-semibold leading-6 text-[#6f8490]">
              No waiting, no locking - your growth comes in steps you can track.
            </p>
          </div>

          <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {steps.map((step, index) => (
              <article className="flex items-start gap-4" key={step}>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#36a5d2] text-2xl font-bold text-white">
                  {index + 1}
                </span>
                <p className="max-w-xs text-base font-semibold leading-6 text-[#4c5962]">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#36a5d2] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <span className="rounded-full bg-white/30 px-4 py-2 text-xs font-bold text-[#e9f9ff]">
            Professional & Proven
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-normal sm:text-5xl">
            Why Choose SwiftRise
          </h2>
          <p className="mt-5 text-sm font-semibold text-white/85">
            Here is why investors choose us
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  className="rounded-lg bg-white p-8 text-[#5b6068] shadow-[0_16px_36px_rgba(24,96,126,0.14)]"
                  key={reason.title}
                >
                  <span className="grid size-16 place-items-center rounded-full border-2 border-[#57b5db] bg-white">
                    <Icon className={reason.tone} size={34} />
                  </span>
                  <h3 className="mt-7 text-xl font-bold leading-6">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-lg font-medium leading-6">
                    {reason.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <span className="rounded-full bg-[#c9edf8] px-4 py-2 text-xs font-bold text-[#2b8fb6]">
            Testimonials
          </span>
          <h2 className="mt-7 text-4xl font-semibold tracking-normal text-[#45484d] sm:text-5xl">
            What Our Users Say
          </h2>
          <p className="mt-5 text-sm font-semibold text-[#72818a]">
            See why our customers love us
          </p>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {testimonials.map((quote, index) => (
              <article
                className={`rounded-lg border bg-white px-8 py-10 shadow-[0_20px_50px_rgba(39,107,137,0.08)] ${
                  index === 1
                    ? "border-[#7fc9e6]"
                    : "border-[#eef5f8] opacity-75"
                }`}
                key={quote}
              >
                <Avatar />
                <p className="mt-8 text-base font-medium leading-6 text-[#68727a]">
                  &quot;{quote}&quot;
                </p>
                <p className="mt-8 font-semibold text-[#7187a0]">
                  Daniel Rosewell
                </p>
                <p className="mt-1 text-xs font-semibold text-[#8b99a5]">
                  IT Manager
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="faq" className="bg-[#eaf7fb] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <a className="flex items-center gap-4 text-[#36a5d2]" href="#">
            <LogoMark large />
            <span className="font-serif text-4xl font-bold tracking-normal">
              SwiftRise
            </span>
          </a>

          <FooterLinks links={["About", "FAQ", "Terms"]} />
          <FooterLinks links={["Whitepaper", "Support"]} />
          <FooterLinks
            title="Social media"
            links={["Telegram", "Discord", "Youtube"]}
          />
        </div>
      </footer>
    </main>
  );
}

function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

function LogoMark({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center rounded-full bg-[#f5fbff] text-[#36a5d2] ${
        large ? "size-12" : "size-8"
      }`}
    >
      <span
        className={`rounded-full border-2 border-current ${
          large ? "size-9" : "size-6"
        }`}
      />
      <span className="absolute text-xs font-black">S</span>
      <span className="absolute right-1 top-1 size-2 rounded-full bg-current" />
      <span className="absolute bottom-1 left-1 size-2 rounded-full bg-current" />
    </span>
  );
}

function HeroInvestmentVisual() {
  return (
    <div className="relative mt-8 h-[360px] w-full max-w-5xl overflow-visible sm:h-[410px] lg:h-[440px]">
      <div className="absolute left-1/2 top-9 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-white/20 sm:h-[430px] sm:w-[430px]" />
      <div className="absolute left-1/2 top-14 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-white/15 sm:h-[390px] sm:w-[390px]" />

      <div className="absolute bottom-6 left-[13%] hidden rounded-md bg-white p-5 text-left text-[#6b7280] shadow-[0_16px_40px_rgba(11,70,96,0.18)] sm:block">
        <p className="font-serif text-lg font-semibold text-[#59636b]">
          Bronze Package
        </p>
        <p className="mt-3 text-sm">Amount Invested: $10</p>
        <p className="mt-2 text-sm">Total Return: $16</p>
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 h-[282px] w-[230px] -translate-x-1/2 rounded-t-[115px] bg-[#1f2933] shadow-[0_18px_40px_rgba(10,61,82,0.25)] sm:h-[320px] sm:w-[260px]">
        <div className="absolute left-1/2 top-6 size-24 -translate-x-1/2 rounded-full bg-[#5b382d]" />
        <div className="absolute left-1/2 top-9 h-20 w-24 -translate-x-1/2 rounded-[50%] bg-[#2b1b17]" />
        <div className="absolute left-1/2 top-28 h-32 w-24 -translate-x-1/2 rounded-t-[42px] bg-white" />
        <div className="absolute bottom-0 left-6 right-6 h-44 rounded-t-[52px] bg-[#121820]" />
        <div className="absolute bottom-14 left-1/2 h-28 w-20 -translate-x-1/2 rounded-xl bg-[#253442] ring-4 ring-white/20">
          <div className="mx-auto mt-3 h-1.5 w-8 rounded-full bg-white/50" />
          <div className="mx-3 mt-5 h-14 rounded-md bg-[#36a5d2]" />
        </div>
      </div>

      <div className="absolute bottom-0 left-[58%] z-20 hidden w-48 rounded-[28px] border-4 border-[#23262b] bg-white p-3 text-left text-[#3f4c55] shadow-[0_20px_50px_rgba(11,70,96,0.28)] md:block">
        <div className="mx-auto mb-3 h-3 w-16 rounded-full bg-[#111827]" />
        <div className="flex items-center justify-between">
          <span className="size-7 rounded-full bg-[#36a5d2]" />
          <LockKeyhole size={16} />
        </div>
        <p className="mt-3 text-xs font-semibold text-[#7b8790]">
          Investment Balance
        </p>
        <p className="mt-1 text-2xl font-extrabold">$10,000</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <MiniStat label="Bronze" value="$10" />
          <MiniStat label="Silver" value="$250" />
        </div>
        <p className="mt-4 text-xs font-bold">Transaction History</p>
        <div className="mt-2 space-y-2">
          <HistoryLine />
          <HistoryLine positive />
        </div>
      </div>

      <div className="absolute bottom-5 right-0 z-0 hidden h-2 w-80 -rotate-[18deg] rounded-full bg-[#e84c22] md:block">
        <span className="absolute -right-2 -top-3 block h-0 w-0 border-y-[16px] border-l-[40px] border-y-transparent border-l-[#ff5d1f]" />
      </div>

      <div className="absolute bottom-0 right-3 flex items-end gap-2 sm:right-0">
        {[44, 62, 82, 104, 128, 150].map((height) => (
          <div
            className="hidden w-9 rounded-t-md border border-[#e79b13] bg-[repeating-linear-gradient(to_bottom,#ffd34d_0,#ffd34d_7px,#f5a80d_7px,#f5a80d_10px)] sm:block"
            key={height}
            style={{ height }}
          />
        ))}
      </div>

      <FloatingCoin className="left-[9%] top-12" />
      <FloatingCoin className="right-[18%] top-4" />
      <FloatingCoin className="right-[10%] top-28" />
    </div>
  );
}

function FloatingCoin({ className }: { className: string }) {
  return (
    <span
      className={`absolute hidden size-12 rotate-[-18deg] place-items-center rounded-full bg-[#31b989] text-white shadow-lg sm:grid ${className}`}
    >
      <BadgeDollarSign size={28} />
    </span>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-[#edf8fc] p-2">
      <p className="text-[10px] font-semibold text-[#7b8790]">{label}</p>
      <p className="text-xs font-bold text-[#36a5d2]">{value}</p>
    </div>
  );
}

function HistoryLine({ positive = false }: { positive?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-md bg-[#f5fbfe] p-2">
      <Coins size={14} className="text-[#36a5d2]" />
      <span className="text-[10px] font-semibold">Wallet Deposit</span>
      <span
        className={`text-[10px] font-bold ${
          positive ? "text-[#16a34a]" : ""
        }`}
      >
        +$100
      </span>
    </div>
  );
}

function Avatar() {
  return (
    <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#23283a]">
      <div className="relative size-12 rounded-full bg-[#f3b49c]">
        <span className="absolute left-2 top-0 h-5 w-8 rounded-t-full bg-[#151826]" />
        <span className="absolute bottom-0 left-1/2 h-5 w-9 -translate-x-1/2 rounded-t-full bg-[#326ecb]" />
        <span className="absolute left-3 top-6 size-1 rounded-full bg-[#161616]" />
        <span className="absolute right-3 top-6 size-1 rounded-full bg-[#161616]" />
      </div>
    </div>
  );
}

function FooterLinks({
  links,
  title,
}: {
  links: string[];
  title?: string;
}) {
  return (
    <div className="space-y-5 pt-1 text-sm font-bold text-[#4f5963]">
      {title ? <p>{title}</p> : null}
      {links.map((link) => (
        <a
          className="block text-[#53616c] transition hover:text-[#238db9]"
          href="#"
          key={link}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

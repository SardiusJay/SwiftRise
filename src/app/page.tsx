import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Choose your tier",
    text: "Pick from 12 professionally designed investment tiers.",
  },
  {
    title: "Start small",
    text: "Begin with as little as $10 USDT, up to $75,000.",
  },
  {
    title: "Track payouts",
    text: "Capital and interest are split into 12 bi-weekly payouts.",
  },
  {
    title: "Withdraw often",
    text: "Withdraw capital plus interest every 14 days.",
  },
];

const features = [
  {
    title: "Low Entry Barrier",
    text: "Start with just $10 USDT.",
    icon: "chart",
  },
  {
    title: "Predictable Growth",
    text: "Earn a steady 6% over 6 months.",
    icon: "growth",
  },
  {
    title: "Regular Payouts",
    text: "Bi-weekly returns for consistent liquidity.",
    icon: "money",
  },
  {
    title: "Fully Transparent",
    text: "No hidden fees, no lock-in traps.",
    icon: "transparent",
  },
  {
    title: "Secure Crypto Handling",
    text: "Built with blockchain integrity.",
    icon: "crypto",
  },
  {
    title: "Reputation First",
    text: "Trusted by users, built for sustainability.",
    icon: "trust",
  },
];

const testimonials = [
  "I started with just $250 and was amazed by the consistent payouts. SwiftRise really delivers on their promises!",
  "The bi-weekly payouts give me confidence and steady income. Perfect for my retirement planning strategy.",
  "Transparent, reliable, and exactly what they promise. SwiftRise has earned my trust and continued investment.",
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#e8f8fd] text-[#4f5963]">
      <section className="landing-hero relative flex min-h-screen flex-col overflow-hidden bg-[#35a4cf] text-white">
        <HeroGrid />

        <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-lg bg-white px-4 py-3 text-[#35a4cf] shadow-[0_14px_40px_rgba(19,85,114,0.16)] sm:px-6">
            <Link className="flex min-w-0 items-center gap-2 sm:gap-3" href="/">
              <Image
                alt="SwiftRise"
                className="h-auto w-[150px] sm:w-[210px]"
                height={77}
                priority
                src="/swiftrise-logo.png"
                width={333}
              />
            </Link>

            <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
              <Link className="nav-link" href="#features">
                Features
              </Link>
              <Link className="nav-link" href="#faq">
                FAQ
              </Link>
              <Link className="nav-link" href="#testimonials">
                Testimonials
              </Link>
            </div>

            <Link
              className="hidden rounded-md bg-[#35a4cf] px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#238db9] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#35a4cf] sm:inline-flex"
              href="/signup"
            >
              Invest Now
            </Link>

            <Link
              className="rounded-md bg-[#35a4cf] px-4 py-2 text-sm font-semibold text-white sm:hidden"
              href="/signup"
            >
              Invest
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4 pt-10 text-center sm:px-6 lg:px-8 lg:pt-12">
          <h1 className="max-w-4xl text-[clamp(2rem,5.2vw,4.25rem)] font-extrabold leading-[1.12] tracking-normal">
            Grow with confidence - Invest Smarter with SwiftRise
          </h1>
          <p className="mt-4 text-[clamp(1.1rem,3vw,1.65rem)] font-medium text-white/90">
            Secure, Transparent and Rising
          </p>
          <Link
            className="mt-6 inline-flex min-h-12 w-full max-w-[320px] items-center justify-center rounded-md bg-white px-8 text-lg font-semibold text-[#35a4cf] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#f5fcff] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[300px]"
            href="/signup"
          >
            Invest Now
          </Link>

          <HeroVisual />
        </div>
      </section>

      <section className="full-section bg-[#e8f8fd] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <span className="rounded-full bg-[#c6edf8] px-4 py-2 text-xs font-bold text-[#268bb2]">
              Step-by-Step
            </span>
            <h2 className="mt-5 text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[1.05] text-[#2c93bb]">
              HOW
              <br />
              IT
              <br />
              WORKS
            </h2>
            <p className="mt-6 max-w-sm text-sm font-semibold leading-6 text-[#6c8390]">
              No waiting, no locking - your growth comes in steps you can track.
            </p>
          </div>

          <div className="grid content-center gap-5 sm:grid-cols-2 lg:gap-8">
            {steps.map((step, index) => (
              <Link className="interactive-card step-card group" href="/signup" key={step.title}>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#35a4cf] text-2xl font-bold text-white transition duration-200 group-hover:scale-110">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-base font-bold text-[#44515b]">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-sm font-semibold leading-6 text-[#596672]">
                    {step.text}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="full-section bg-[#35a4cf] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full bg-white/30 px-4 py-2 text-xs font-bold text-[#e9f9ff]">
            Professional & Proven
          </span>
          <h2 className="mt-6 text-[clamp(2.3rem,6vw,4rem)] font-extrabold leading-tight tracking-normal">
            Why Choose SwiftRise
          </h2>
          <p className="mt-4 text-sm font-semibold text-white/85">
            Here is why investors choose us
          </p>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {features.map((feature) => (
              <Link className="interactive-card feature-card group" href="/signup" key={feature.title}>
                <span className="grid size-16 place-items-center rounded-full border-2 border-[#5bb7dc] bg-white transition duration-200 group-hover:scale-105">
                  <FeatureIcon name={feature.icon} />
                </span>
                <span className="mt-6 block text-xl font-bold leading-6 text-[#565d65]">
                  {feature.title}
                </span>
                <span className="mt-2 block text-lg font-medium leading-6 text-[#626973]">
                  {feature.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="full-section bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full bg-[#c6edf8] px-4 py-2 text-xs font-bold text-[#268bb2]">
            Testimonials
          </span>
          <h2 className="mt-7 text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-tight text-[#46494e]">
            What Our Users Say
          </h2>
          <p className="mt-4 text-sm font-semibold text-[#75848e]">
            See why our customers love us
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((quote, index) => (
              <Link
                className={`interactive-card testimonial-card group ${
                  index === 1 ? "border-[#8ad0ea]" : "border-[#eef5f8] md:opacity-75"
                }`}
                href="/signup"
                key={quote}
              >
                <Avatar />
                <span className="mt-7 block text-base font-medium leading-6 text-[#68727a]">
                  &quot;{quote}&quot;
                </span>
                <span className="mt-7 block font-semibold text-[#7187a0]">
                  Daniel Rosewell
                </span>
                <span className="mt-1 block text-xs font-semibold text-[#8b99a5]">
                  IT Manager
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer id="faq" className="bg-[#e8f8fd] py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.8fr] lg:px-8">
          <Link className="flex items-center gap-4 text-[#35a4cf]" href="/">
            <Image
              alt="SwiftRise"
              className="h-auto w-[220px] sm:w-[290px]"
              height={77}
              src="/swiftrise-logo.png"
              width={333}
            />
          </Link>
          <FooterLinks links={["About", "FAQ", "Terms"]} />
          <FooterLinks links={["Whitepaper", "Support"]} />
          <FooterLinks title="Social media" links={["Telegram", "Discord", "Youtube"]} />
        </div>
      </footer>
    </main>
  );
}

function HeroGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-35"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)",
        backgroundSize: "clamp(72px, 10vw, 144px) clamp(72px, 10vw, 144px)",
      }}
    />
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual relative mt-8 h-[360px] w-full max-w-6xl sm:h-[430px] lg:h-[470px]">
      <div className="hero-orbit hero-orbit-outer" />
      <div className="hero-orbit hero-orbit-inner" />

      <Link
        className="hero-chip interactive-card hidden sm:block"
        href="/dashboard/investment/bronze"
      >
        <span className="block font-serif text-lg font-semibold text-[#59636b]">
          Bronze Package
        </span>
        <span className="mt-3 block text-sm">Amount Invested: $10</span>
        <span className="mt-2 block text-sm">Total Return: $16</span>
      </Link>

      <Image
        alt="Investor using SwiftRise on his phone"
        className="hero-person"
        height={404}
        priority
        src="/hero-person.png"
        width={417}
      />

      <Link
        aria-label="Open dashboard preview"
        className="hero-phone-link interactive-card hidden md:block"
        href="/dashboard"
      >
        <Image
          alt="SwiftRise investment dashboard on phone"
          className="h-auto w-full"
          height={359}
          priority
          src="/hero-phone.png"
          width={236}
        />
      </Link>

      <Image
        alt=""
        aria-hidden="true"
        className="hero-growth"
        height={344}
        src="/growth-coins.png"
        width={470}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="tether-token tether-token-left"
        height={88}
        src="/tether-1.png"
        width={88}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="tether-token tether-token-top"
        height={88}
        src="/tether.png"
        width={88}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="tether-token tether-token-right"
        height={88}
        src="/tether-2.png"
        width={88}
      />
    </div>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const stroke = name === "trust" ? "#8b5cf6" : name === "transparent" ? "#ef5d6f" : "#35a4cf";

  return (
    <svg aria-hidden="true" className="size-9" fill="none" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="17" stroke={stroke} strokeWidth="2" opacity=".18" />
      {name === "chart" ? (
        <>
          <path d="M11 28V13M19 28V18M27 28V10" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
          <path d="M10 29h22" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
        </>
      ) : null}
      {name === "growth" ? (
        <>
          <path d="M10 28h20M12 25l6-7 5 4 7-10" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M24 12h6v6" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </>
      ) : null}
      {name === "money" ? (
        <>
          <rect height="16" rx="2" stroke={stroke} strokeWidth="3" width="24" x="8" y="13" />
          <path d="M20 17v8M16 21h8" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
        </>
      ) : null}
      {name === "transparent" ? (
        <>
          <path d="M12 28 28 12" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
          <circle cx="20" cy="20" r="9" stroke={stroke} strokeWidth="3" />
        </>
      ) : null}
      {name === "crypto" ? (
        <>
          <path d="M20 10 30 16v9l-10 6-10-6v-9l10-6Z" stroke={stroke} strokeLinejoin="round" strokeWidth="3" />
          <path d="M15 20h10M20 15v10" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
        </>
      ) : null}
      {name === "trust" ? (
        <>
          <path d="M12 22c4-5 6-5 10 0 3 3 5 3 8 0" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
          <path d="M13 25l5 5M27 25l-5 5" stroke={stroke} strokeLinecap="round" strokeWidth="3" />
        </>
      ) : null}
    </svg>
  );
}

function Avatar() {
  return (
    <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#23283a] transition duration-200 group-hover:scale-105">
      <span className="relative size-12 rounded-full bg-[#f3b49c]">
        <span className="absolute left-2 top-0 h-5 w-8 rounded-t-full bg-[#151826]" />
        <span className="absolute bottom-0 left-1/2 h-5 w-9 -translate-x-1/2 rounded-t-full bg-[#326ecb]" />
        <span className="absolute left-3 top-6 size-1 rounded-full bg-[#161616]" />
        <span className="absolute right-3 top-6 size-1 rounded-full bg-[#161616]" />
      </span>
    </span>
  );
}

function FooterLinks({ links, title }: { links: string[]; title?: string }) {
  return (
    <div className="space-y-4 text-sm font-bold text-[#4f5963]">
      {title ? <p>{title}</p> : null}
      {links.map((link) => (
        <Link className="block transition hover:text-[#238db9]" href="#" key={link}>
          {link}
        </Link>
      ))}
    </div>
  );
}

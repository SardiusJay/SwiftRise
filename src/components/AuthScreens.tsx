import Link from "next/link";

type Field = {
  label: string;
  placeholder: string;
  type?: string;
  icon?: string;
};

type AuthScreenProps = {
  title: string;
  subtitle?: string;
  fields?: Field[];
  button: string;
  href?: string;
  forgot?: boolean;
  otp?: boolean;
};

const slides = {
  signup: {
    title: "Invest Smart,\nGrow faster",
    copy: "Start your investment journey\ntoday and maximize returns\nwith\nno risk.",
  },
  secure: {
    title: "Secure Your\nFinancial Future",
    copy: "Invest with confidence\nprotect your assets with our\nsecure platform.",
  },
};

export function AuthSplit({
  variant = "signup",
  children,
}: {
  variant?: keyof typeof slides;
  children: React.ReactNode;
}) {
  const slide = slides[variant];

  return (
    <main className="min-h-screen bg-[#e5f8ff]">
      <div className="grid min-h-screen lg:grid-cols-[672px_1fr]">
        <section className="relative hidden overflow-hidden lg:block">
          <div className="absolute inset-0 bg-[url('/auth-bg.png')] bg-auto bg-left-top bg-no-repeat" />
          <div className="absolute bottom-[38px] left-[109px] w-[487px] rounded-[14px] bg-white px-10 py-8 text-center">
            <h1 className="whitespace-pre-line font-serif text-[42px] font-bold leading-[1.18] text-[#349ed0]">
              {slide.title}
            </h1>
            <p className="mt-6 whitespace-pre-line font-serif text-[25px] leading-[1.18] text-[#4a4a4a]">
              {slide.copy}
            </p>
            <div className="mt-11 flex justify-center gap-6">
              <span className="h-9 w-12 rounded-full bg-[#2e91b8]" />
              <span className="h-9 w-9 rounded-full bg-[#dfe4ea]" />
              <span className="h-9 w-9 rounded-full bg-[#dfe4ea]" />
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center px-5 py-12">
          {children}
        </section>
      </div>
    </main>
  );
}

export function AuthCard({
  title,
  subtitle = "Kindly fill the details below",
  fields = [],
  button,
  href = "/dashboard",
  forgot,
  otp,
}: AuthScreenProps) {
  return (
    <div className="sr-card w-full max-w-[456px] px-7 py-8 sm:px-8">
      <h2 className="text-center font-serif text-[28px] font-bold leading-tight">
        {title}
      </h2>
      <p className="mt-3 text-center text-[16px] tracking-wide text-[#5b6f8d]">
        {subtitle}
      </p>
      {otp ? (
        <OtpForm button={button} href={href} />
      ) : (
        <form className="mt-9 space-y-6">
          {fields.map((field) => (
            <label className="block" key={field.label}>
              <span className="mb-2 block text-[14px] text-[#3f3f3f]">
                {field.label}
              </span>
              <span className="relative block">
                <input
                  className="sr-input pr-12"
                  placeholder={field.placeholder}
                  type={field.type ?? "text"}
                />
                {field.icon ? (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#65748b]">
                    {field.icon}
                  </span>
                ) : null}
              </span>
            </label>
          ))}
          {forgot ? (
            <Link
              className="ml-3 inline-block font-serif text-[14px] font-bold text-[#147fb0]"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          ) : null}
          <Link className="sr-button w-full" href={href}>
            {button}
          </Link>
        </form>
      )}
    </div>
  );
}

function OtpForm({ button, href }: { button: string; href: string }) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <input
            className="h-14 rounded-[5px] border border-[#cfd7e2] text-center text-[20px] text-[#8b98aa] outline-none first:border-[#178cc4]"
            defaultValue="2"
            key={item}
          />
        ))}
      </div>
      <Link className="sr-button mt-8 w-full" href={href}>
        {button}
      </Link>
      <p className="mt-10 text-center text-[13px] text-[#8a96aa]">
        No Code{" "}
        <Link className="font-medium text-[#0084bf]" href="/otp">
          Resend Now
        </Link>
      </p>
    </div>
  );
}

export function CenterAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#e5f8ff] px-5">
      {children}
    </main>
  );
}

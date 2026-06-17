import Link from "next/link";
import { AppShell, BackLink, Progress, StatusPill } from "./AppShell";

const packages = [
  ["Bronze Package", "$ 10 USDT", "$ 249 USDT"],
  ["Silver Package", "$ 250 USDT", "$ 999 USDT"],
  ["Gold Package", "$ 1,000 USDT", "$ 2,499 USDT"],
  ["Platinum Package", "$ 2,500 USDT", "$ 4,999 USDT"],
  ["Diamond Package", "$ 5,000 USDT", "$ 9,999 USDT"],
  ["Ruby Package", "$ 10,000 USDT", "$ 14,999 USDT"],
  ["Emerald Package", "$ 15,000 USDT", "$ 19,999 USDT"],
  ["Sapphire Package", "$ 20,000 USDT", "$ 29,999 USDT"],
  ["Obsidian Package", "$ 30,000 USDT", "$ 39,999 USDT"],
];

export function HomeDashboard() {
  return (
    <AppShell title="Home" active="home">
      <section className="rounded-[8px] bg-gradient-to-r from-[#205f77] to-[#0e3444] px-5 py-9 text-white md:px-7">
        <p className="font-serif text-[16px]">Investment Balance</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-serif text-[34px] font-bold">$ 10,000</p>
          <span className="text-[38px]">◉</span>
        </div>
      </section>

      <section className="mt-8">
        <p className="text-[16px]">Wallet Address</p>
        <div className="flex items-center gap-8 text-[#63708a]">
          <span>AGEuuhfurfhefvbfgheifoeddhef hbvdnvjef</span>
          <span className="text-[27px] text-[#9da5b2]">▣</span>
        </div>
      </section>

      <h2 className="mt-9 font-serif text-[20px] font-bold">Ongoing Investments</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <InvestmentMini title="Bronze Package" amount="$10" returnAmount="$16" progress={67} />
        <InvestmentMini title="Silver Package" amount="$250" returnAmount="$400" progress={78} />
      </div>

      <section className="sr-card mt-6 overflow-hidden">
        <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center">
          <h2 className="font-serif text-[20px] font-bold">Transaction History</h2>
          <div className="flex h-10 flex-1 items-center rounded-[8px] border border-[#d6dce5] px-4 text-[#9aa3b2]">
            <span className="mr-3">⌕</span> Type to search
          </div>
          <span>≡</span>
        </div>
        <div className="grid grid-cols-4 bg-[#f7f8fa] px-6 py-4 text-[13px] text-[#5b6f8d]">
          <span>Transaction Type</span><span>Amount</span><span>Date</span><span>Status</span>
        </div>
        {[
          ["Wallet Deposit", "$10", "12/05/25 11:00pm", "Successful", "success"],
          ["Wallet Withdrawal", "$100", "12/05/25 11:00pm", "Successful", "success"],
          ["Daily Interest", "$100", "12/05/25 11:00pm", "Failed", "danger"],
          ["Daily Interest", "$100", "12/05/25 11:00pm", "Pending", "warning"],
        ].map((row) => (
          <div className="grid grid-cols-4 border-t border-[#e5e7eb] px-6 py-5 text-[14px]" key={row[0] + row[3]}>
            <span className="font-medium text-[#111827]">{row[0]}</span>
            <span className="text-[#5b6f8d]">{row[1]}</span>
            <span className="text-[#5b6f8d]">{row[2]}</span>
            <span><StatusPill tone={row[4] as "success" | "danger" | "warning"}>{row[3]}</StatusPill></span>
          </div>
        ))}
      </section>
    </AppShell>
  );
}

function InvestmentMini({ title, amount, returnAmount, progress }: { title: string; amount: string; returnAmount: string; progress: number }) {
  return (
    <Link className="sr-card block p-4" href="/dashboard/investment/bronze">
      <h3 className="font-serif text-[18px]">{title}</h3>
      <p className="mt-3 font-serif text-[#9aa3b2]">Amount Invested: {amount}</p>
      <p className="font-serif text-[#9aa3b2]">Total Return: {returnAmount}</p>
      <div className="mt-2"><Progress value={progress} /></div>
    </Link>
  );
}

export function InvestmentPage() {
  return (
    <AppShell title="Investment" active="investment">
      <section className="rounded-[8px] bg-white p-3">
        <h2 className="font-serif text-[20px] font-bold">Ongoing Investments</h2>
        <div className="mt-3"><InvestmentMini title="Bronze Package" amount="$10" returnAmount="$16" progress={67} /></div>
      </section>

      <section className="mt-4 rounded-[8px] bg-white p-3">
        <h2 className="font-serif text-[20px] font-bold">Available package</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {packages.map(([name, min, max], index) => (
            <article className="sr-card overflow-hidden" key={name}>
              <div className={`flex min-h-[58px] items-center justify-between px-3 ${index === 0 ? "bg-[#39a6d4] text-white" : ""}`}>
                <h3 className="font-serif font-bold text-[#5b6f8d]">{name}</h3>
                {index === 0 ? <span className="rounded-full bg-white px-2 py-1 text-xs text-[#2f9cc8]">Currently Investing</span> : null}
              </div>
              <div className="px-3 py-5 font-serif leading-7">
                <p className="text-[#9aa3b2]">Duration :24 Weeks</p>
                <p className="text-[#9aa3b2]">Interest: 6% - 8.83%</p>
                <p>Minimum Investment: {min}</p>
                <p>Maximum Investment: {max}</p>
              </div>
              <div className="px-2 pb-4">
                <Link className={`sr-button w-full ${index === 0 ? "bg-[#ccd3dc] text-white" : ""}`} href={index === 2 ? "/dashboard/investment/gold" : "/dashboard/investment/bronze"}>
                  Invest Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

export function BronzeDetail({ ready = false }: { ready?: boolean }) {
  return (
    <AppShell title="Investment" active="investment">
      <BackLink href="/dashboard/investment" />
      <PackageHeading name="Bronze Package" min="$ 10 USDT" max="$ 249 USDT" />
      <section className="sr-card mt-11 max-w-[1095px] px-6 py-5">
        <p className="font-serif text-[23px]">Amount Invested: $10</p>
        <p className="mt-2 font-serif text-[23px]">Total Return : $16</p>
        <div className="mt-7"><Progress value={ready ? 100 : 65} width="432px" /></div>
        {!ready ? <p className="mt-7 font-serif text-[#9aa3b2]">Next Withdrawal In 10 Days</p> : null}
        <Link className={`sr-button mt-7 w-[325px] rounded-[19px] ${ready ? "" : "bg-[#94cce5]"}`} href="/dashboard/investment/withdrawal">
          Withdraw
        </Link>
      </section>
    </AppShell>
  );
}

export function GoldTerms() {
  return (
    <AppShell title="Investment" active="investment">
      <BackLink href="/dashboard/investment" />
      <PackageHeading name="Gold Package" min="$ 250 USDT" max="$ 999 USDT" />
      <section className="mt-14 max-w-[1095px] font-serif text-[18px] leading-[1.35]">
        <p className="font-bold"><span className="mr-2 text-[#ff8a1c]">△</span>Please Note:</p>
        <ol className="mt-5 list-decimal pl-6">
          <li><b>Minimum investment amount:</b> The minimum investment amount for the chosen package must be met.</li>
          <li><b>Payment Schedule:</b> Bi-weekly withdrawal period. Pay out is accordingly bi-weekly for the period of 6 months (12 withdrawals in total)</li>
          <li><b>Risk Disclaimer:</b> Each investment carries the same 6% interest. Return varies or may vary due to the amount invested.</li>
          <li><b>No charges:</b> No charges are being placed on any user. No withdrawal charges and no deposit charges.</li>
        </ol>
        <hr className="my-5" />
        <label className="flex items-center gap-3 text-[16px]">
          <span className="size-[17px] border border-[#249fda]" />
          By investing, you acknowledge that you have read, understood, and agreed to these terms.
        </label>
        <Link className="sr-button mt-5 w-[217px] rounded-[17px]" href="/dashboard/investment/deposit">Invest Now</Link>
      </section>
    </AppShell>
  );
}

function PackageHeading({ name, min, max }: { name: string; min: string; max: string }) {
  return (
    <section className="font-serif text-[21px]">
      <h2 className="mb-4 text-[26px] font-bold">{name}</h2>
      <p className="text-[#5b6f8d]">Duration :24 Weeks</p>
      <p className="text-[#5b6f8d]">Interest : 6% - 8.83%</p>
      <p className="font-bold">Minimum Investment: {min}</p>
      <p className="font-bold">Maximum Investment: {max}</p>
    </section>
  );
}

export function DepositPage() {
  return (
    <AppShell title="Investment" active="investment">
      <BackLink href="/dashboard/investment/gold" />
      <section className="ml-0 max-w-[620px] md:ml-10">
        <p className="mb-12 text-center font-serif text-[18px]">Kindly copy the wallet address for deposit or use the QR CODE</p>
        <p className="font-serif text-[18px]">USDC Wallet Address</p>
        <div className="mt-1 flex h-[70px] items-center justify-between rounded-[7px] bg-[#ddd] px-4 font-serif text-[18px]">
          TGTEvUnNcFJygweVep9CacEbDrxxAyLfxw <span>▣</span>
        </div>
        <div className="mx-auto mt-12 grid h-[247px] w-[334px] place-items-center rounded-[8px] bg-white">
          <div className="text-center">
            <p className="mb-6 font-bold text-black">Deposit USDT to Bitget</p>
            <div className="grid size-[160px] grid-cols-8 gap-1 bg-white p-1">
              {Array.from({ length: 64 }).map((_, index) => (
                <span className={`${(index * 7 + index) % 5 < 2 ? "bg-black" : "bg-white"} border border-black/10`} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 font-serif text-[18px]">
          <div><p>Network</p><b>TRC20 (Tron)</b></div>
          <div className="text-right"><p>Minimum Deposit Amount</p><b>$10</b></div>
        </div>
        <Link className="sr-button mt-12 w-full rounded-[17px]" href="/dashboard">Deposit Successful</Link>
        <p className="mt-12 text-[12px]">ⓘ Please ensure you are sending USDT on the TRC20 network. Sending assets on incorrect networks may result in permanent loss of funds.</p>
      </section>
    </AppShell>
  );
}

export function WithdrawalPage() {
  return (
    <AppShell title="Investment" active="investment">
      <BackLink href="/dashboard/investment/bronze" label="Withdrawal" />
      <section className="max-w-[728px]">
        <p className="mb-10">Please verify the wallet address carefully to ensure accuracy and prevent any potential errors or loss of funds.<br />NOTE: Individually can only withdraw once every two weeks</p>
        <FormInput label="Network" placeholder="TRC20" muted />
        <FormInput label="Amount" placeholder="$200" />
        <p className="mb-6 mt-5 text-[13px]">Minimum withdrawal is $5 usdt<br />Maximum withdrawal is $50,000 usdt.</p>
        <FormInput label="USDC Wallet Address" placeholder="0×2tr46238r83472hfehrufgwjir4y758373482uri" muted />
        <label className="my-6 flex items-center gap-2 font-serif text-[13px] text-[#5b6f8d]"><span className="size-[14px] border border-[#269eda]" /> I have checked and ensured i inputted the correct wallet address.</label>
        <Link className="sr-button w-full rounded-[17px]" href="/dashboard">Withdraw</Link>
      </section>
    </AppShell>
  );
}

export function BountyPage() {
  const tasks = [
    ["All Social Media", "Reward $1 - $100", "Complete social media engagement tasks", "/dashboard/bounty/social"],
    ["Youtube/TikTok", "Reward $1 - $100", "Create and share video content", "/dashboard/bounty/youtube"],
    ["Blog or Website", "Reward $1 - $200", "Write articles and web content", "/dashboard/bounty/blog"],
    ["Webinar or Seminar", "Reward $1 - $500", "Host or participate in educational event", "/dashboard/bounty/webinar"],
    ["Conference (On-line or in-person)", "Reward $1 - $500", "Attend or speak at industry conference", "/dashboard/bounty/conference"],
    ["Invite Friends", "Reward 50% to 100%", "Earn commission by referring new users", "/dashboard/bounty"],
  ];
  return (
    <AppShell title="Bounty" active="bounty">
      <section className="rounded-[8px] bg-[#174f63] px-4 py-5 text-white">
        <h2 className="font-serif font-bold">Your Reward Status</h2>
        <div className="mt-4 grid grid-cols-3 gap-4 font-serif">
          <div><p>Total Referrals</p><b className="text-xl">5</b></div>
          <div><p>Pending Rewards</p><b className="text-xl">$50</b></div>
          <div className="text-right"><p>Total Earned</p><b className="text-xl">$150</b></div>
        </div>
      </section>
      <section className="mt-9 font-serif text-[18px]">
        <p>Referral Link</p>
        <p className="text-[#1296d4]">www.swiftrise.com/46738393u4u373 <span className="ml-7 text-[#9da5b2]">▣</span></p>
      </section>
      <h2 className="mt-8 font-serif text-[22px] font-bold">New Task</h2>
      <div className="mt-4 space-y-4">
        {tasks.map(([name, reward, desc, href]) => (
          <Link className="flex items-center justify-between rounded-[8px] bg-white px-4 py-5" href={href} key={name}>
            <span><b className="font-serif text-[18px]">{name}</b> <small className="ml-2 text-[#1296d4]">{reward}</small><br /><span className="font-serif text-[15px]">{desc}</span></span>
            <span className="text-[29px]">→</span>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

type BountyKind = "social" | "youtube" | "blog" | "webinar" | "conference";

type BountyCopy = {
  title: string;
  reward: string;
  subtitle: string;
  instructions: string[];
  submit: string[];
};

export function BountyDetail({ kind }: { kind: BountyKind }) {
  const bountyCopy: Record<BountyKind, BountyCopy> = {
    social: {
      title: "All Social Media",
      reward: "Reward $1 - $100",
      subtitle: "Complete social media engagement task",
      instructions: ["Create a post about Swiftrise, focusing on your personal experience with the company so far. Encourage others to click on your link and register.", "Make sure they register and select the investment options that suits them best.", "Submit your information for review", "The review will be completed within 24 to 72 hours"],
      submit: ["Write an email with the name of your social media platform along with the review (e.g., Facebook Review).", "Take a screenshot of your post on social media page and attach it to the email", "After 12 hours of posting, take a screenshot of engagement on your post and include it in the email", "Provide the username of account used to make post.", "Include the link to your post.", "Compile all the items and send them together in a single email to us at bounty@swiftrise.com or swiftrisetm@gmail.com", "Please wait patiently for a response from us after review process."],
    },
    youtube: {
      title: "Youtube/Tiktok",
      reward: "Reward $1 - $100",
      subtitle: "Create and share video content",
      instructions: ["Record a video review discussing swiftrise.", "Ensure the video shows your face.", "The video must be at least HD 720p quality (1280x720).", "The minimum length of the video is 30 seconds", "Upload the video to Youtube or Tiktok.", "Include keywords in title and description to optimize search visibility.", "Leave a link to sSwiftrise website in the description.", "Share the video on your social media platforms."],
      submit: ["Screenshot your post and send to bounty@swiftwise.com.", "We will review and update payment within 72hrs. Send an email that includes the names of your social media platforms and type review (e.g,. Youtube Review)", "Take a screenshot of your post on your social media page and attach it to the mail", "After 12 hours of posting, take a screenshot of engagement on your post and include it in the email", "Provide the username of account used to make post.", "Include the link to your post.", "Compile all the items and send them together in a single email to us at bounty@swiftrise.com or swiftrisetm@gmail.com", "Please wait patiently for a response from us after we review your submission."],
    },
    blog: {
      title: "Blog or Website",
      reward: "Reward $1 - $200",
      subtitle: "Write article and web content",
      instructions: ["The article must contain between 500 to 1000 character.", "The article must include at least 3 pictures of a chart ( screenshot of your deposit, withdrawal, or daily interest).", "The article should contain at least 2 links: one to the Swiftrise website and another to one of our social media pages.", "The article should be unique, engaging, informative and interesting for your reader.", "Do not delete the article after review; If it is deleted , your submission will canceled.", "Plagiarism, including translating articles from other users into another language is PROHIBITED", "After completing your article, submit the following form review."],
      submit: ["Write an email with the name of your blog or website and the subject line 'Blog Review'.", "Take a screenshot of your post on your social media page and include it in the email.", "After 12 hours of posting, send screenshot showing the engagement on the post.", "Include your username for the account used to post.", "Provide the link to the post", "Send everything together in a single to us at bounty@swiftrise.com or swiftrise@gmail.com.", "Please wait patiently for our response after we review your submission."],
    },
    webinar: {
      title: "Webinar or Seminar",
      reward: "Reward $1 - $200",
      subtitle: "Write article and web content",
      instructions: ["The video should be between 30 to 60 minutes long.", "Your face must be visible in the video.", "Include footage from the website: SwiftRise.io.", "Make the video engaging and creative.", "Show some of your actions, such as purchasing, withdrawing, participating in bounty programs, and earning daily interest.", "Share a story about the company and your personal experience with it.", "* Feel free to be creative and utilize technology (e.g., dynamic installations, corporate styles, video inserts, filming in unique locations, using a selfie stick, or shooting solo)."],
      submit: ["Write an email with the name of your platform and use 'Webinar Review' as the subject line.", "Take a photo of all participants five minutes before the webinar ends to capture the number of attendees. Attach this photo to your email.", "Include a short video that captures attendee engagement and feedback about the company after the webinar."],
    },
    conference: {
      title: "Conference (Online or In-person)",
      reward: "Reward $1 - $200",
      subtitle: "Write article and web content",
      instructions: ["Organize a conference in your city dedicated to SwiftRise, or host an online conference focused on SwiftRise.", "Invite at least 100 to 200 people to attend the conference.", "Discuss collaboration opportunities with SwiftRise during the event.", "Create a photo and video report of the conference."],
      submit: ["Write an email with the name of your platform and the subject line 'Conference Review.'", "Take a photo of all participants five minutes before the conference ends to show the number of attendees. Include this photo in your email.", "Send a short video capturing the engagement and feedback from attendees regarding the company after the conference.", "Include your username used to register on SwiftRise and the name you used to host the conference.", "If the conference was hosted online, include the link in your email.", "Compile all the above information into a single email and send it to us at bounty@swiftrise.com or swiftrisetm@gmail.com.", "Please be patient while we review your submission and await our response."],
    },
  };
  const data = bountyCopy[kind];

  return (
    <AppShell title="Bounty" active="bounty">
      <section className="max-w-[1090px] font-serif text-[18px] leading-[1.25]">
        <div className="flex items-start gap-6">
          <BackLink href="/dashboard/bounty" label="" />
          <div><h2 className="text-[26px] font-bold">{data.title} <small className="ml-3 text-[13px] text-[#1296d4]">{data.reward}</small></h2><p>{data.subtitle}</p></div>
        </div>
        <h3 className="mt-8 font-bold">Instructions</h3>
        <ol className="mt-5 list-decimal pl-7">{data.instructions.map((item) => <li key={item}>{item}</li>)}</ol>
        {kind === "conference" ? <><hr className="my-6" /><h3 className="font-bold">Extra Benefits</h3><p className="mt-4">If your conference attracts over 1,000 attendees, you will receive a special bonus in addition to your initial reward. The more participants you have, the greater your bonus will be, based on the quality and scale of your conference.</p><p className="mt-6">If you need further guidance before the conference, feel free to reach out to our support team. They are ready to assist you and provide all necessary information.</p></> : null}
        <hr className="my-6" />
        <h3 className="font-bold">How to submit</h3>
        <ol className="mt-5 list-decimal pl-7">{data.submit.map((item) => <li key={item}>{item}</li>)}</ol>
        <hr className="mt-5" />
      </section>
    </AppShell>
  );
}

export function ProfilePage() {
  return (
    <AppShell title="Profile" active="profile">
      <section className="max-w-[1095px] space-y-10">
        <div>
          <h2 className="mb-6 text-[22px]">Basic Details</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <FormInput label="Full Name" placeholder="Abidoye John" muted />
            <FormInput label="Username" placeholder="Abijo1" muted />
            <FormInput label="Email Address" placeholder="Abijoye1@gmail.com" muted />
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-[22px]">Wallet</h2>
          <div className="grid items-end gap-6 md:grid-cols-[1fr_325px]">
            <FormInput label="Wallet Address (USDC)" placeholder="TGTEvUnNcFJygweVep9CacEbDrxxAyLfxw" muted />
            <Link className="sr-button rounded-[22px]" href="/wallet-settings">Change Wallet Address</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-[22px]">Security</h2>
          <div className="grid items-end gap-6 md:grid-cols-[1fr_325px]">
            <FormInput label="Old Password" placeholder="************" muted />
            <Link className="sr-button rounded-[22px]" href="/new-password">Change Password</Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function FormInput({ label, placeholder, muted }: { label: string; placeholder: string; muted?: boolean }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[16px]">{label}</span>
      <input className={`sr-input ${muted ? "bg-[#eaf8fd]" : ""}`} placeholder={placeholder} />
    </label>
  );
}

export const BRAND = {
  name: "Helix Cover",
  short: "Helix",
  tagline: "Business insurance for modern teams",
};

export const NAV = {
  links: [
    { label: "Coverage", href: "#coverage" },
    { label: "Claims", href: "#claims" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ],
  cta: { label: "Get a quote", href: "#quote" },
};

export const HERO = {
  badge: "Now licensed in 47 states",
  title: {
    line1: "Business insurance,",
    line2Lead: "covered in ",
    line2Accent: "four minutes.",
  },
  sub: "Helix Cover quotes, binds, and renews business policies entirely online — and pairs every account with a real human for claims. Built for founders who'd rather be building.",
  primary: { label: "Start your quote", href: "#quote" },
  secondary: { label: "Watch the 60s demo", href: "#demo" },
  chips: ["A-rated carriers", "Bind in minutes", "Cancel anytime"],
  // Quote widget mockup (right-hand floating card)
  widget: {
    eyebrow: "Live quote",
    rows: [
      { label: "Business type", value: "SaaS · Series A" },
      { label: "Annual revenue", value: "$2.4M" },
      { label: "Headcount", value: "24" },
      { label: "Coverage", value: "GL + Cyber + E&O" },
    ],
    price: { amount: "189", per: "/ month", note: "Bind today · billed monthly" },
  },
};

export const SHOWCASE = {
  eyebrow: "How Helix feels in your day",
  title: {
    lead: "Three minutes inside ",
    italic: "the dashboard.",
  },
  slides: [
    {
      label: "01 / Quote",
      caption: "Six questions in, three carrier offers out. Compare limits, exclusions, and price side-by-side.",
      image: "/images/showcase-quote.jpg",
    },
    {
      label: "02 / Certificate",
      caption: "Add a certificate holder. The COI is downloaded before you finish typing the email.",
      image: "/images/showcase-coi.jpg",
    },
    {
      label: "03 / Claim",
      caption: "Tap to start a claim. Your named specialist gets a page within sixty seconds.",
      image: "/images/showcase-claim.jpg",
    },
  ],
};

export const CUSTOMERS = {
  intro: "Trusted by teams at",
  logos: [
    "Linear-style",
    "Notion-style",
    "Vercel-style",
    "Stripe-style",
    "Ramp-style",
    "Replit-style",
    "Rippling-style",
    "Loom-style",
  ],
};

export const TRUST = {
  intro: "Backed by A-rated carriers · trusted by 8,400+ companies",
  // simple word marks rendered as text — replace with logos later
  carriers: [
    "Chubb",
    "Travelers",
    "Hiscox",
    "AmTrust",
    "Liberty Mutual",
    "Nationwide",
    "Markel",
    "CNA",
    "Zurich",
  ],
};

export const STATS: Array<{ value: number; suffix: string; label: string; format?: "range" | "currency" }> = [
  { value: 4, suffix: " min", label: "average time to bind a policy" },
  { value: 92, suffix: "%", label: "claims approved on first review" },
  { value: 312, suffix: "M", label: "paid in claims since 2022", format: "currency" },
  { value: 99, suffix: "%", label: "renewal rate among active SMBs" },
];

export const WHY = {
  eyebrow: "Why we exist",
  title: {
    lead: "Insurance was built ",
    italic: "for paperwork. ",
    rest: "We built it for builders.",
  },
  image: "/images/manifesto-portrait.jpg",
  imageAlt: "Helix Cover founder at her desk",
  body: [
    "Helix Cover started after one too many founders told us the same story — six weeks to get a certificate of insurance, three brokers ignoring their emails, and a renewal quote nobody could explain.",
    "So we rebuilt the stack. AI-powered underwriting that quotes in minutes, A-rated carriers behind every policy, and a single dedicated human who picks up when a claim happens. No PDFs. No fax machines. No surprises at renewal.",
  ],
};

export const AI_HUMANS = {
  eyebrow: "Engineered + human",
  title: {
    line1: "AI handles the forms.",
    line2: "Humans handle the hard days.",
  },
  body: "Quoting, binding, renewals, certificates — all instant. But when a claim hits, you get a real claims specialist on the phone, not a chatbot. We think that's the line that matters.",
};

export const COVERAGE = {
  eyebrow: "Coverage that fits how you work",
  title: "Everything a modern business needs — in one policy or unbundled.",
  items: [
    {
      title: "General Liability",
      body: "Third-party bodily injury, property damage, and advertising claims. The baseline most landlords and clients ask for.",
      bullet: ["$1M / $2M limits standard", "Certificates in seconds", "Additional insureds, free"],
      icon: "shield",
      tag: "Most popular",
    },
    {
      title: "Cyber Liability",
      body: "Ransomware, BEC, data breach, regulatory fines. Includes 24/7 incident response retainer.",
      bullet: ["Up to $5M aggregate", "1-hour breach hotline", "Vendor risk included"],
      icon: "lock",
      tag: "Trending +312%",
    },
    {
      title: "Professional Indemnity",
      body: "Errors & omissions for SaaS, agencies, consultants. Defends against negligent-advice and missed-deliverable claims.",
      bullet: ["Tech E&O bundled", "Worldwide jurisdiction", "Prior acts coverage"],
      icon: "briefcase",
      tag: null,
    },
    {
      title: "Workers' Comp",
      body: "Medical, lost wages, and rehab for on-the-job injuries. Pay-as-you-go billing — no audit surprises.",
      bullet: ["50-state filing", "Pay-by-payroll", "Return-to-work programs"],
      icon: "users",
      tag: null,
    },
  ],
};

export const HOW = {
  eyebrow: "How it works",
  title: "From signup to bound in under five minutes.",
  steps: [
    {
      n: "01",
      title: "Answer six questions",
      body: "Tell us what you do, how big you are, and what you need covered. We pull the rest from public filings.",
    },
    {
      n: "02",
      title: "Compare A-rated quotes",
      body: "Our engine runs your profile against eleven carriers. You see the three best options side-by-side — price, limits, exclusions.",
    },
    {
      n: "03",
      title: "Bind and download your COI",
      body: "Pay monthly or annually. Your certificate is in your inbox before the page finishes loading.",
    },
  ],
};

export const COMPARISON = {
  eyebrow: "The old way vs. Helix",
  title: {
    lead: "You don't need a broker chain. You need ",
    italic: "one platform.",
  },
  headers: ["Step", "Traditional broker", "Helix Cover"],
  rows: [
    { area: "Initial quote", old: "5–10 business days", neu: "Under 4 minutes" },
    { area: "Certificate of insurance", old: "Email request, 24-hour wait", neu: "Self-serve in dashboard, instant" },
    { area: "Mid-term changes", old: "Re-underwrite, new paperwork", neu: "Edit live, prorated automatically" },
    { area: "Renewal pricing", old: "Surprise increase, take it or leave it", neu: "Locked 30 days before renewal" },
    { area: "Claim response", old: "Voicemail, callback in 48h", neu: "Specialist in under 1 hour" },
  ],
};

export const TESTIMONIALS = {
  eyebrow: "Loved by operators",
  title: "Founders who've stopped thinking about insurance.",
  items: [
    {
      quote: "We got bound on GL, cyber, and E&O in one afternoon. The same coverage took our last broker six weeks. I genuinely have no other complaints.",
      author: "Daniel R.",
      role: "COO · Series B SaaS",
    },
    {
      quote: "Filed a cyber claim at 2am on a Saturday. A real human called back at 2:43am. That alone is worth the premium.",
      author: "Erica M.",
      role: "Founder · Heartland Data",
    },
    {
      quote: "Renewal pricing didn't move. After ten years of mystery 18% bumps, I almost didn't believe the email.",
      author: "Marcus T.",
      role: "Ops Lead · Summit Manufacturing",
    },
  ],
};

export const FAQ = {
  eyebrow: "Common questions",
  title: "Answers, before you have to ask.",
  items: [
    {
      q: "Which carriers do you use?",
      a: "Every policy is placed with an A- or better rated carrier from AM Best — Chubb, Travelers, Hiscox, AmTrust, and others. Helix Cover is the MGA on the front end; the balance sheet behind every policy is a regulated insurer.",
    },
    {
      q: "What if I need to add a certificate holder mid-policy?",
      a: "Self-serve, instant. Add or remove additional insureds and certificate holders from your dashboard — the new COI is emailed within seconds. No phone calls, no surcharges.",
    },
    {
      q: "How does claims work?",
      a: "Every active account is paired with a named claims specialist. First contact within one business hour, status updates every 48 hours, and direct phone access from intake to settlement. 92% of claims approved on first review.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Monthly policies cancel any time with no fee — you only pay for days covered. Annual policies are prorated. We'll even sign your COI cancellation letters for replacement carriers.",
    },
  ],
};

export const CTA = {
  eyebrow: "Get covered today",
  title: {
    line1: "Stop chasing brokers.",
    line2Italic: "Get bound in four minutes.",
  },
  body: "Get a real quote — not an estimate — in under five minutes. No credit card, no commitment, no spam.",
  primary: { label: "Start your quote", href: "#quote" },
  secondary: { label: "Talk to a human", href: "#contact" },
};

export const FOOTER = {
  company: {
    name: "Helix Cover, Inc.",
    address: ["228 Park Ave S", "PMB 24812", "New York, NY 10003"],
    email: "hello@helixcover.com",
    phone: "+1 (212) 555-0143",
  },
  columns: [
    {
      title: "Product",
      links: [
        { label: "Coverage", href: "#coverage" },
        { label: "Claims", href: "#claims" },
        { label: "Pricing", href: "#pricing" },
        { label: "Status", href: "#status" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Press", href: "#press" },
        { label: "Careers", href: "#careers" },
        { label: "Partners", href: "#partners" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  newsletter: {
    title: "The Underwriter",
    sub: "Monthly notes on protecting modern businesses. No spam.",
  },
  badge: "Licensed P&C producer · NPN 19284754 · Disclosures",
  legalLeft: "© 2026 Helix Cover, Inc. All rights reserved.",
  legalRight: ["Privacy", "Terms", "Disclosures"],
};


import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Heart,
  House,
  BriefcaseBusiness,
  Eye,
  EyeOff,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";

const IMAGES = {
  // Replace this URL with your final home illustration.
  homeIllustration:
    "https://placehold.co/600x420/E9EEDF/244E40?text=Your+Home+Illustration",
};

const BENEFITS = [
  { icon: MapPin, label: "Close to home" },
  { icon: Heart, label: "Fair opportunities" },
  { icon: ShieldCheck, label: "Privacy first" },
];

function BrandLogo() {
  return (
    <a href="/" className="inline-flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#315B49] text-[#315B49]">
        <House size={21} strokeWidth={2.2} />
      </span>
      <span className="text-2xl font-bold tracking-tight text-[#244E40]">
        Ghar<span className="text-[#84966D]">Seva</span>
      </span>
    </a>
  );
}

function FeatureList() {
  return (
    <div className="grid grid-cols-3 gap-2 border-t border-[#D7DDC9] pt-5">
      {BENEFITS.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center justify-center gap-1.5 text-xs text-[#637460] sm:text-sm"
        >
          <Icon size={14} className="shrink-0 text-[#80956D]" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function WelcomePanel() {
  return (
    <section className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[28px] bg-[#E9EDDE] p-7 sm:p-10 lg:min-h-0 lg:p-12">
      <BrandLogo />

      <div className="mt-12 sm:mt-16 lg:mt-[72px]">
        <p className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#536E58] sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#82966C]" />
          A little help. A better everyday.
        </p>

        <h1 className="max-w-xl text-4xl font-medium leading-[1.12] tracking-[-0.055em] text-[#244E40] sm:text-5xl xl:text-[54px]">
          New connections.
          <br />
          Better{" "}
          <span className="font-serif italic text-[#87996F]">
            beginnings.
          </span>
        </h1>

        <p className="mt-5 max-w-md text-sm leading-7 text-[#75816D] sm:text-base">
          Your skills deserve the right opportunity. Find work close to
          home, on your own terms.
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-[540px] flex-1 items-center justify-center py-10">
        <div className="absolute h-56 w-56 rounded-full bg-[#DFE6D0] sm:h-72 sm:w-72" />

        <img
          src={IMAGES.homeIllustration}
          alt="Illustration of a welcoming home"
          className="relative z-10 w-full max-w-[440px] object-contain"
        />

        <div className="absolute bottom-8 left-0 z-20 flex max-w-[220px] items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur-sm sm:bottom-10">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6EDDC] text-[#668263]">
            <Heart size={18} />
          </span>
          <div>
            <p className="text-xs font-semibold text-[#315747]">
              Built around people.
            </p>
            <p className="mt-1 text-[10px] leading-4 text-[#82907D]">
              Respect. Care. Every day.
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-12 z-20 hidden -rotate-3 items-center gap-2 rounded-full bg-white/80 px-4 py-3 text-[11px] text-[#58705A] shadow-sm sm:flex">
          <Sparkles size={14} />
          Good help starts with a connection
        </div>
      </div>

      <FeatureList />
    </section>
  );
}

function AccountTypeSelector({ accountType, setAccountType }) {
  const options = [
    { value: "help", label: "I need help", icon: House },
    { value: "worker", label: "I'm looking for work", icon: BriefcaseBusiness },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#F0F1E9] p-1.5">
      {options.map(({ value, label, icon: Icon }) => {
        const selected = accountType === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setAccountType(value)}
            aria-pressed={selected}
            className={`flex min-h-12 items-center justify-center gap-2 rounded-lg border px-2 py-3 text-xs font-semibold transition-all sm:text-sm ${
              selected
                ? "border-[#315747] bg-white text-[#315747] shadow-sm"
                : "border-transparent text-[#92998B] hover:bg-white/60"
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        );
      })}
    </div>
  );
}

function FormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
  children,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#456251]">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required
          className="h-12 w-full rounded-lg border border-[#E2E4DA] bg-white px-3.5 text-sm text-[#315747] outline-none transition placeholder:text-[#ADB1A7] hover:border-[#BECBB7] focus:border-[#527760] focus:ring-2 focus:ring-[#527760]/10"
        />
        {children}
      </div>
    </div>
  );
}

function PasswordStrength({ password }) {
  const strength =
    password.length >= 12 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
      ? 4
      : password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password)
        ? 3
        : password.length >= 6
          ? 2
          : password.length > 0
            ? 1
            : 0;

  const labels = ["", "Weak", "Fair", "Good", "Strong"];

  return (
    <div className="mt-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full transition-colors ${
              strength >= level ? "bg-[#81986D]" : "bg-[#E6E8DF]"
            }`}
          />
        ))}
      </div>
      <p className="mt-1.5 text-[10px] text-[#9A9F91]">
        {password
          ? `${labels[strength]} · Use at least 8 characters`
          : "Use at least 8 characters."}
      </p>
    </div>
  );
}

function SignupForm() {
  const [accountType, setAccountType] = useState("worker");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!acceptedTerms) return;

    // Connect your registration API here.
    console.log({
      fullName,
      email,
      password,
      accountType,
      acceptedTerms,
    });
  }

  return (
    <section className="flex min-w-0 flex-col justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
      <div className="mx-auto w-full max-w-[420px]">
        <a
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-xs text-[#8B9384] transition hover:text-[#315747] lg:mb-14"
        >
          <ArrowLeft size={14} />
          Back to home
        </a>

        <div className="mb-7">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B977A] sm:text-xs">
            Your next chapter starts here
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#244E40] sm:text-[36px]">
            Create your account.
          </h2>
          <p className="mt-3 text-sm text-[#92988A]">
            A little about you. A world of possibilities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <AccountTypeSelector
            accountType={accountType}
            setAccountType={setAccountType}
          />

          <FormField
            label="Full name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />

          <FormField
            label="Email address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <div>
            <FormField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            >
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9AA194] hover:text-[#315747]"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </FormField>
            <PasswordStrength password={password} />
          </div>

          <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-[#7C8676]">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#285642]"
            />
            <span>
              I agree to the{" "}
              <a
                href="/terms"
                className="font-semibold text-[#536F4D] hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="font-semibold text-[#536F4D] hover:underline"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>

          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#244E40] px-4 text-sm font-semibold text-white transition hover:bg-[#193E32] focus:outline-none focus:ring-4 focus:ring-[#244E40]/15"
          >
            {accountType === "worker" ? "Join as a worker" : "Create account"}
            <ArrowRight size={16} />
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#E5E7DF]" />
          <span className="text-[11px] text-[#A1A69B]">or continue with</span>
          <div className="h-px flex-1 bg-[#E5E7DF]" />
        </div>

        <button
          type="button"
          onClick={() => {
            // Connect Google OAuth here.
          }}
          className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#E1E4DA] bg-white text-sm font-medium text-[#737C6E] transition hover:bg-[#F8F9F5] focus:outline-none focus:ring-4 focus:ring-[#244E40]/10"
        >
          <span className="text-lg font-bold text-[#4285F4]">G</span>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-xs text-[#8B9285]">
          Already part of GharSeva?{" "}
          <a
            href="/login"
            className="font-semibold text-[#315747] hover:underline"
          >
            Log in <ArrowRight className="inline" size={12} />
          </a>
        </p>

        <div className="mt-5 flex items-start justify-center gap-2 text-center text-[10px] leading-5 text-[#A3A89C]">
          <ShieldCheck size={14} className="mt-0.5 shrink-0" />
          <p>
            Your information stays private and secure.
            <br />
            Please use sample details, not your real password, in this demo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Login() {
  return (
    <main className="min-h-screen bg-[#FAFAF6] p-3 sm:p-5 lg:p-7">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-[1600px] grid-cols-1 gap-3 sm:min-h-[calc(100vh-40px)] sm:gap-5 lg:min-h-[calc(100vh-56px)] lg:grid-cols-[1.02fr_1fr] lg:gap-8">
        <WelcomePanel />

        <div className="flex min-w-0 flex-col">
          <div className="flex justify-end py-1">
            <span className="rounded-full border border-[#E5E7DF] px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-[#939A8D]">
              Interactive preview
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <SignupForm />
          </div>

          <footer className="flex justify-between px-2 py-2 text-[10px] text-[#9AA093]">
            <span>© 2026 GharSeva</span>
            <a href="/privacy" className="hover:text-[#315747]">
              Privacy
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}




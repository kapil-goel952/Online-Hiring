
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Heart,
  House,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001";

const BENEFITS = [
  "Close to home",
  "Fair opportunities",
  "Privacy first",
];

function BrandLogo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#315B49] text-[#315B49]">
        <House size={21} strokeWidth={2.2} />
      </span>

      <span className="text-2xl font-bold tracking-tight text-[#244E40]">
        Ghar<span className="text-[#84966D]">Seva</span>
      </span>
    </Link>
  );
}

function WelcomePanel() {
  return (
    <section className="relative flex min-h-[500px] flex-col overflow-hidden rounded-[28px] bg-[#E9EDDE] p-7 sm:p-10 lg:min-h-0 lg:p-12">
      <BrandLogo />

      <div className="mt-12 sm:mt-16">
        <p className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#536E58] sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#82966C]" />
          A little help. A better everyday.
        </p>

        <h1 className="max-w-xl text-4xl font-medium leading-[1.12] tracking-[-0.055em] text-[#244E40] sm:text-5xl xl:text-[54px]">
          Welcome{" "}
          <span className="font-serif italic text-[#87996F]">
            back.
          </span>
          <br />
          Good to see you.
        </h1>

        <p className="mt-5 max-w-md text-sm leading-7 text-[#75816D] sm:text-base">
          Your community is just a step away. Sign in to
          reconnect, find opportunities, and make everyday
          life a little easier.
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-[440px] flex-1 items-center justify-center py-12">
        <div className="absolute h-52 w-52 rounded-full bg-[#DFE6D0] sm:h-64 sm:w-64" />

        <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-[36px] border border-white/70 bg-white/60 shadow-sm sm:h-52 sm:w-52">
          <House
            size={100}
            strokeWidth={1.1}
            className="text-[#557760]"
          />

          <span className="absolute right-1 top-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#81966C] shadow-sm">
            <Heart size={23} />
          </span>

          <span className="absolute bottom-3 left-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#244E40] text-white shadow-sm">
            <Sparkles size={20} />
          </span>
        </div>

        <div className="absolute bottom-5 left-0 flex items-center gap-3 rounded-2xl bg-white/90 p-3 shadow-sm">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6EDDC] text-[#668263]">
            <ShieldCheck size={19} />
          </span>

          <div>
            <p className="text-xs font-semibold text-[#315747]">
              Your community awaits.
            </p>
            <p className="mt-1 text-[10px] text-[#82907D]">
              Respect. Care. Every day.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-[#D7DDC9] pt-5">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit}
            className="flex items-center justify-center gap-1.5 text-center text-[10px] text-[#637460] sm:text-xs"
          >
            <Heart
              size={13}
              className="shrink-0 text-[#80956D]"
            />
            {benefit}
          </div>
        ))}
      </div>
    </section>
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

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResetInfo, setShowResetInfo] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccess("");
    setShowResetInfo(false);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to log in.");
      }

      if (data.success === false) {
        throw new Error(data.message || "Unable to log in.");
      }

      // Save credentials only if the backend returns a token.
      if (data.token) {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem("token", data.token);
      }

      if (data.user) {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem("user", JSON.stringify(data.user));
      }

      setSuccess("Login successful! Redirecting...");

      navigate("/");
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Cannot connect to the server. Please check that the backend is running."
          : err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAF6] p-3 sm:p-5 lg:p-7">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-[1600px] grid-cols-1 gap-3 sm:min-h-[calc(100vh-40px)] sm:gap-5 lg:min-h-[calc(100vh-56px)] lg:grid-cols-[1.02fr_1fr] lg:gap-8">
        <WelcomePanel />

        <div className="flex min-w-0 flex-col">
          <div className="flex justify-end py-1">
            <span className="rounded-full border border-[#E5E7DF] px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-[#939A8D]">
              GharSeva Account
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <section className="flex w-full flex-col justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
              <div className="mx-auto w-full max-w-[420px]">
                <Link
                  to="/"
                  className="mb-10 inline-flex items-center gap-2 text-xs text-[#8B9384] transition hover:text-[#315747]"
                >
                  <ArrowLeft size={14} />
                  Back to home
                </Link>

                <div className="mb-8">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B977A] sm:text-xs">
                    Your next chapter continues
                  </p>

                  <h2 className="text-3xl font-semibold tracking-[-0.045em] text-[#244E40] sm:text-[36px]">
                    Log in to your account.
                  </h2>

                  <p className="mt-3 text-sm text-[#92988A]">
                    Welcome back! Enter your details below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormField
                    label="Email address"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                  />

                  <FormField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                  >
                    <button
                      type="button"
                      onClick={() => setShowPassword((visible) => !visible)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9AA194] hover:text-[#315747]"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </FormField>

                  <div className="flex items-center justify-between gap-3">
                    <label className="flex cursor-pointer items-center gap-2 text-xs text-[#7C8676]">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(event) =>
                          setRememberMe(event.target.checked)
                        }
                        className="h-4 w-4 accent-[#285642]"
                      />
                      Remember me
                    </label>

                    <button
                      type="button"
                      onClick={() => setShowResetInfo(true)}
                      className="text-xs font-semibold text-[#536F4D] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {showResetInfo && (
                    <p className="rounded-lg bg-[#F0F1E9] p-3 text-xs leading-5 text-[#536F4D]">
                      Password reset is not set up yet. Please contact the
                      GharSeva team for help.
                    </p>
                  )}

                  {error && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                    >
                      {error}
                    </p>
                  )}

                  {success && (
                    <p
                      role="status"
                      className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800"
                    >
                      {success}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#244E40] px-4 text-sm font-semibold text-white transition hover:bg-[#193E32] focus:outline-none focus:ring-4 focus:ring-[#244E40]/15 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Logging in..." : "Log in"}
                    {!loading && <ArrowRight size={16} />}
                  </button>
                </form>

                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#E5E7DF]" />
                  <span className="text-[11px] text-[#A1A69B]">
                    NEW TO GHARSEVA?
                  </span>
                  <div className="h-px flex-1 bg-[#E5E7DF]" />
                </div>

                <p className="text-center text-xs text-[#8B9285]">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-[#315747] hover:underline"
                  >
                    Create account{" "}
                    <ArrowRight className="inline" size={12} />
                  </Link>
                </p>

                <div className="mt-7 flex items-start justify-center gap-2 text-center text-[10px] leading-5 text-[#A3A89C]">
                  <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                  <p>
                    Your account details are handled securely.
                    <br />
                    Never share your password with anyone.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <footer className="flex justify-between px-2 py-2 text-[10px] text-[#9AA093]">
            <span>© 2026 GharSeva</span>
            <Link to="/register" className="hover:text-[#315747]">
              Create account
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}

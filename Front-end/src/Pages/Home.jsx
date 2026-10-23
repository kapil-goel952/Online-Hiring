import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  House,
  ArrowRight,
  MapPin,
  Search,
  MessageCircle,
  UserRound,
  Wrench,
  ShieldCheck,
  Sparkles,
  Menu,
  X,
  Handshake,
  BriefcaseBusiness,
  Check,
} from "lucide-react";

const workCategories = [
  "Cleaning",
  "Cooking",
  "Electrical work",
  "Plumbing",
  "Home maintenance",
  "Other work",
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find the right worker",
    description:
      "Explore worker profiles and compare their skills, experience and location.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Talk about the work",
    description:
      "Explain what you need, discuss the details and agree on a fair price.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Make it happen",
    description:
      "Once both sides agree on the work and terms, move forward together.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (skill.trim()) {
      params.set("skill", skill.trim());
    }

    if (location.trim()) {
      params.set("location", location.trim());
    }

    const query = params.toString();

    navigate(query ? `/services?${query}` : "/services");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAF6] text-[#244E40]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#E8EADF] bg-[#FAFAF6]/95 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-[76px] items-center justify-between gap-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-2.5"
              aria-label="GharSeva home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#315B49]">
                <House size={21} strokeWidth={1.8} />
              </span>

              <span className="text-2xl font-bold tracking-tight">
                Ghar<span className="text-[#87996F]">Seva</span>
              </span>
            </Link>

            <div className="hidden items-center gap-8 text-sm font-medium text-[#718071] md:flex">
              <Link
                to="/services"
                className="transition hover:text-[#244E40]"
              >
                Find workers
              </Link>

              <a
                href="#how-it-works"
                className="transition hover:text-[#244E40]"
              >
                How it works
              </a>

              <a
                href="#for-workers"
                className="transition hover:text-[#244E40]"
              >
                For workers
              </a>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <Link
                to="/login"
                className="rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-[#EDF0E7]"
              >
                Log in
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-xl bg-[#244E40] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#193E32]"
              >
                Join GharSeva
                <ArrowRight size={15} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-xl p-2 transition hover:bg-[#EDF0E7] sm:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>

          {menuOpen && (
            <div
              id="mobile-navigation"
              className="grid gap-1 border-t border-[#E8EADF] py-4 sm:hidden"
            >
              <Link
                to="/services"
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-[#EDF0E7]"
              >
                Find workers
              </Link>

              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-[#EDF0E7]"
              >
                How it works
              </a>

              <a
                href="#for-workers"
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-[#EDF0E7]"
              >
                For workers
              </a>

              <div className="mt-2 grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="rounded-xl border border-[#DCE3D6] px-4 py-3 text-center text-sm font-semibold"
                >
                  Log in
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="rounded-xl bg-[#244E40] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Get started
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#E8EDDF] opacity-70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCE4D4] bg-white/80 px-4 py-2 text-xs font-semibold text-[#61785B] sm:text-sm">
              <Sparkles size={15} />
              A marketplace for people and skills
            </div>

            <h1 className="max-w-2xl text-[42px] font-semibold leading-[1.12] tracking-[-0.055em] sm:text-6xl lg:text-[66px]">
              Find the right person for the{" "}
              <span className="font-serif font-normal italic text-[#87996F]">
                work you need.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#788476] sm:text-lg">
              Discover local workers, explore their skills and talk directly
              about your requirements. Agree on the work and a fair price
              together.
            </p>

            {/* Worker search */}
            <form
              onSubmit={handleSearch}
              className="mt-9 rounded-2xl border border-[#E3E7DB] bg-white p-4 shadow-[0_18px_45px_-35px_rgba(36,78,64,0.35)] sm:p-5"
            >
              <label
                htmlFor="work-skill"
                className="mb-3 block text-sm font-semibold"
              >
                What work do you need help with?
              </label>

              <div className="grid gap-3 sm:grid-cols-[1fr_0.8fr]">
                <div className="flex min-w-0 items-center gap-3 rounded-xl border border-[#E6E9E0] bg-[#FCFCF9] px-3.5">
                  <Search
                    size={18}
                    className="shrink-0 text-[#87996F]"
                  />

                  <input
                    id="work-skill"
                    type="text"
                    value={skill}
                    onChange={(event) => setSkill(event.target.value)}
                    placeholder="e.g. electrician, cook"
                    className="min-w-0 w-full bg-transparent py-3.5 text-sm text-[#244E40] outline-none placeholder:text-[#A1A99A]"
                  />
                </div>

                <div className="flex min-w-0 items-center gap-3 rounded-xl border border-[#E6E9E0] bg-[#FCFCF9] px-3.5">
                  <MapPin
                    size={18}
                    className="shrink-0 text-[#87996F]"
                  />

                  <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="City or area"
                    aria-label="City or area"
                    className="min-w-0 w-full bg-transparent py-3.5 text-sm text-[#244E40] outline-none placeholder:text-[#A1A99A]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#244E40] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#193E32] sm:w-auto"
              >
                Find workers
                <ArrowRight size={16} />
              </button>

              <p className="mt-3 text-xs leading-5 text-[#92998A]">
                Search by the kind of work you need and where you need it.
              </p>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#7D8979] sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={16} className="text-[#87996F]" />
                Talk directly
              </span>

              <span className="inline-flex items-center gap-2">
                <Handshake size={16} className="text-[#87996F]" />
                Agree on your terms
              </span>
            </div>

            <p className="mt-7 text-sm text-[#788476]">
              Looking for work instead?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#315B49] underline decoration-[#B7C5AA] underline-offset-4 hover:text-[#193E32]"
              >
                List your skills
              </Link>
            </p>
          </div>

          {/* Illustrative worker-profile preview */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-[35px] bg-[#E8EDDF] blur-2xl" />

            <div className="relative rounded-[28px] border border-[#E5E9DE] bg-white p-5 shadow-[0_28px_80px_-45px_rgba(36,78,64,0.32)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#87996F]">
                    Built around people
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Get to know your worker.
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#899284]">
                    See the details that help you decide who to contact.
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E9EDDE] text-[#52745A]">
                  <UserRound size={22} />
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-[#E6E9E0] bg-[#FCFCF9] p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E9EDDE] text-[#315B49]">
                    <BriefcaseBusiness size={24} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <span className="inline-block rounded-md bg-[#E9EDDE] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#52745A]">
                      Example profile
                    </span>

                    <h3 className="mt-1.5 font-semibold">
                      Worker profile preview
                    </h3>

                    <p className="mt-1 text-xs text-[#899284]">
                      Skills · Experience · Location
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-[#E6E9E0] pt-4">
                  <p className="text-xs font-semibold text-[#7D8979]">
                    WHAT MATTERS
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Skills offered", "Work experience", "Local area"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#DDE4D6] bg-white px-3 py-1.5 text-xs text-[#52745A]"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#E9EDDE]/70 p-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#52745A]">
                    <MessageCircle size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Discuss before deciding
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#788476]">
                      Talk about the work and agree on a fair price.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-[11px] text-[#9AA192]">
                Illustrative preview · Actual worker listings will come from
                the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular work categories */}
      <section className="border-y border-[#E8EADF] bg-white py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">
                What kind of work are you looking for?
              </p>
              <p className="mt-1 text-xs leading-5 text-[#899284]">
                Start with a type of work, then explore available workers.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#52745A] transition hover:text-[#244E40]"
            >
              Browse workers
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {workCategories.map((category) => (
              <Link
                key={category}
                to={`/services?skill=${encodeURIComponent(category)}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E3E7DB] bg-[#FCFCF9] px-4 py-2.5 text-sm font-medium text-[#526752] transition hover:border-[#C6D4BD] hover:bg-[#E9EDDE]"
              >
                <Wrench size={14} className="text-[#87996F]" />
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#87996F]">
              Simple by design
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From finding help to getting work done.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#879184] sm:text-base">
              GharSeva brings people together. You discover the right
              connection, discuss what needs to be done and decide the terms
              together.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <article
                key={number}
                className="rounded-2xl border border-[#E8EADF] bg-white p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9EDDE] text-[#52745A]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-[#A5B098]">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold">{title}</h3>

                <p className="mt-2 text-sm leading-7 text-[#899284]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Two sides of the marketplace */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#87996F]">
              One community, two sides
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Here for the people who need help—and the people who provide it.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {/* User card */}
            <article className="rounded-3xl border border-[#E5E9DE] bg-[#FCFCF9] p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9EDDE] text-[#52745A]">
                <House size={23} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#87996F]">
                For users
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                Find someone who can help.
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#788476]">
                Browse worker profiles, explain the job, compare your options
                and talk through the price before you make a decision.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Explore workers by skill and location",
                  "Understand their experience and services",
                  "Discuss the work and agree on terms",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#526752]"
                  >
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-[#87996F]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/services"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#244E40] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#193E32]"
              >
                Explore workers
                <ArrowRight size={16} />
              </Link>
            </article>

            {/* Worker card */}
            <article
              id="for-workers"
              className="rounded-3xl border border-[#E5E9DE] bg-[#E9EDDE]/65 p-7 sm:p-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#52745A]">
                <BriefcaseBusiness size={23} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#687F60]">
                For workers
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                Let people discover your skills.
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#75816D]">
                Introduce yourself, list the work you can do and help potential
                customers understand how you can help them.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Showcase your skills and experience",
                  "Explain your services and pricing",
                  "Connect with people seeking your work",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#526752]"
                  >
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-[#87996F]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/register"
                className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#D1DBC9] bg-white px-5 py-3 text-sm font-semibold text-[#315B49] transition hover:bg-[#F6F8F2]"
              >
                Join as a worker
                <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-[#244E40] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#CEDBBC]">
              Start with a conversation
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              The right connection can make all the difference.
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Find a person who can help, or make your skills easier for
              others to discover.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#244E40] transition hover:bg-[#F0F3EB]"
            >
              Find workers
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Join as a worker
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E9DE] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <House size={19} />
            <span>
              Ghar<span className="text-[#87996F]">Seva</span>
            </span>
          </Link>

          <p className="text-xs text-[#92998A]">
            © 2026 GharSeva. Made with care.
          </p>

          <div className="flex gap-5 text-xs text-[#788476]">
            <Link to="/services" className="hover:text-[#244E40]">
              Find workers
            </Link>

            <Link to="/login" className="hover:text-[#244E40]">
              Log in
            </Link>

            <Link to="/register" className="hover:text-[#244E40]">
              Sign up
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
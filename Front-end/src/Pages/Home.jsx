import React from "react";
import { Link } from "react-router";
import {
  House,
  ArrowRight,
  Heart,
  ShieldCheck,
  MapPin,
  BriefcaseBusiness,
  Sparkles,
  Menu,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "Home Cleaning",
    description: "A fresh, clean and comfortable home.",
    color: "bg-[#E8EFE2]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Daily Help",
    description: "Find reliable help for everyday tasks.",
    color: "bg-[#F1EEDC]",
  },
  {
    icon: Heart,
    title: "Care & Support",
    description: "Helping hands when you need them most.",
    color: "bg-[#E7ECE7]",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trust comes first",
    description: "Building connections with care and respect.",
  },
  {
    icon: MapPin,
    title: "Closer to home",
    description: "Discover opportunities in your neighbourhood.",
  },
  {
    icon: Heart,
    title: "Made for people",
    description: "A community where everyone matters.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAF6] text-[#244E40]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#E8EADF] bg-[#FAFAF6]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#315B49]">
              <House size={22} />
            </span>
            <span className="text-2xl font-bold tracking-tight">
              Ghar<span className="text-[#87996F]">Seva</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#718071] md:flex">
            <a href="#home" className="text-[#244E40]">Home</a>
            <a href="#services" className="transition hover:text-[#244E40]">
              Services
            </a>
            <a href="#about" className="transition hover:text-[#244E40]">
              About us
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
              Get started <ArrowRight size={15} />
            </Link>
          </div>

          <Link
            to="/login"
            aria-label="Open login"
            className="rounded-lg p-2 hover:bg-[#EDF0E7] sm:hidden"
          >
            <Menu size={23} />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#E8EDDF] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-64 h-64 w-64 rounded-full bg-[#F0F0E3] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE4D4] bg-white/80 px-4 py-2 text-xs font-semibold text-[#61785B] sm:text-sm">
              <Sparkles size={15} />
              A little help. A better everyday.
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.1] tracking-[-0.055em] sm:text-6xl lg:text-[68px]">
              Your home.
              <br />
              Your people.
              <br />
              <span className="font-serif italic font-normal text-[#87996F]">
                Your GharSeva.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#788476] sm:text-lg">
              Find the right helping hands or discover work closer to home.
              Simple connections that make everyday life better.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#244E40] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#193E32]"
              >
                Explore services <ArrowRight size={17} />
              </Link>

              <Link
                to="/register"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#DCE3D6] bg-white px-6 py-3.5 text-sm font-semibold text-[#315747] transition hover:bg-[#F0F3EB]"
              >
                Join our community
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#849080] sm:text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#82966C]" />
                People first
              </span>
              <span className="flex items-center gap-2">
                <Heart size={16} className="text-[#82966C]" />
                Built with care
              </span>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-[40%] bg-[#E7EDDD] blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white bg-[#E9EDDE] p-5 shadow-[0_24px_80px_-35px_rgba(36,78,64,0.3)] sm:p-8">
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/40" />

              <img
                src="https://placehold.co/640x520/E9EDDE/315747?text=Your+GharSeva+Illustration"
                alt="A welcoming home illustration"
                className="relative z-10 aspect-[5/4] w-full rounded-2xl object-cover"
              />

              <div className="relative z-10 mt-5 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8EFE2] text-[#52745A]">
                  <Heart size={23} />
                </div>
                <div>
                  <p className="font-semibold text-[#315747]">
                    Good help starts here.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#8B9585] sm:text-sm">
                    Connecting homes and people, one step at a time.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-12 hidden items-center gap-2 rounded-xl border border-[#E7EADF] bg-white px-4 py-3 text-xs font-medium shadow-sm sm:flex lg:-left-8">
              <span className="h-2 w-2 rounded-full bg-[#82966C]" />
              A community that cares
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#87996F]">
                What we offer
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A little help goes a long way.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#879184] sm:text-base">
                Find support for your home or take the next step towards a
                new opportunity.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#52745A] hover:text-[#244E40]"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description, color }) => (
              <Link
                to="/services"
                key={title}
                className="group rounded-2xl border border-[#E8EADF] bg-[#FCFCF9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C9D5C1] hover:shadow-[0_18px_40px_-25px_rgba(36,78,64,0.25)] sm:p-7"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} text-[#41644F]`}>
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#899284]">
                  {description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#52745A] transition group-hover:gap-3">
                  Learn more <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Benefits */}
      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-[28px] bg-[#E9EDDE] p-7 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#687F60]">
                The GharSeva promise
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Better homes begin with better connections.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#75816D] sm:text-base">
                We want to make finding help and finding work feel simpler,
                more welcoming and more accessible to everyone.
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-[#52745A]">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#75816D]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl border border-[#E5E9DE] bg-white p-7 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to get started?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#879184]">
              Your next connection could start today.
            </p>
          </div>

          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#244E40] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#193E32]"
          >
            Join GharSeva <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E9DE] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
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

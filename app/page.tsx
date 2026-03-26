import Image from "next/image";
import Link from "next/link";

import { login } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <main className="flex-1 flex flex-col md:flex-row min-h-screen">
      {/* Left Column: Visual Anchor */}
      <section className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-primary">
        <img
          alt="High-contrast architectural steel beams"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfhmyYih68UcMEXWrLrbiBBKtgY0qOuKA_g0wWFDIZxXlxgkhMBb1mFk22gUNDxHu65Do_bvwlQ7JVnAxiVV4F7oP1PL5Xqa8nncsycxsoKb99NvcQ2XTi2K-T8VFCOKwsXKI3YPFjDWjCt1kY8khTI9xW9-Rt3eCSxhb7JMiEozvOig1Z3_nKnycHB5hDnC4NV7beqWEkFNL_8LQFnUo0uDf9eI8rg9xw7lBN0D01kh3MQFEhaD3cjZHYGZWd7Srn8wxWykqdJDc"
        />
        <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-br from-[rgba(25,40,48,0.85)] to-[rgba(47,62,70,0.4)]"></div>
        {/* Branding Overlay for Desktop */}
        <div className="relative z-10 p-16 flex flex-col justify-between h-full">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Field Ready
            </span>
            <h1 className="font-headline text-6xl font-bold text-white tracking-tighter leading-none max-w-md">
              BuildTrack
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-surface-variant font-medium text-lg leading-relaxed mb-8">
              The definitive authority for site compliance and industrial verification. Precisely engineered for the modern field engineer.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="block text-2xl font-bold text-white font-headline">
                  100%
                </span>
                <span className="text-on-primary-container text-xs uppercase tracking-widest font-bold">
                  Accuracy
                </span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-headline">
                  0%
                </span>
                <span className="text-on-primary-container text-xs uppercase tracking-widest font-bold">
                  Paperwork
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Login Card Container */}
      <section className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-surface">
        <div className="w-full max-w-md">
          {/* Mobile Branding (Logo only) */}
          <div className="lg:hidden mb-12">
            <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tighter">
              BuildTrack
            </h2>
            <div className="h-1 w-12 bg-secondary mt-2"></div>
          </div>

          {/* Login Header */}
          <div className="mb-10">
            <h3 className="font-headline text-4xl font-bold text-primary mb-2">
              Access Portal
            </h3>
            <p className="text-on-surface-variant font-medium">
              Please authenticate to manage your site inspections.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" action={login}>
            {searchParams?.message && (
              <div className="p-4 bg-error-container text-on-error-container text-sm font-medium rounded-lg mb-4 text-center">
                {searchParams.message}
              </div>
            )}
            {/* Email Field */}
            <div className="space-y-2">
              <label
                className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant"
                htmlFor="email"
              >
                Worker Email
              </label>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-lowest border-none h-14 px-4 text-primary font-medium transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent rounded"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                />
                <span className="absolute right-4 top-4 material-symbols-outlined text-outline-variant">
                  alternate_email
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  className="block text-sm font-bold uppercase tracking-widest text-on-surface-variant"
                  htmlFor="password"
                >
                  Secure Token
                </label>
                <Link
                  className="text-xs font-bold text-secondary uppercase tracking-tighter hover:underline"
                  href="#"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-lowest border-none h-14 px-4 text-primary font-medium transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent rounded"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
                <span className="absolute right-4 top-4 material-symbols-outlined text-outline-variant">
                  lock
                </span>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center">
              <input
                className="w-5 h-5 border-none bg-surface-container-highest rounded-sm text-secondary focus:ring-0 focus:ring-offset-0"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <label
                className="ml-3 text-sm font-medium text-on-surface"
                htmlFor="remember"
              >
                Keep me signed in on this station
              </label>
            </div>

            {/* Primary Action */}
            <button
              type="submit"
              className="w-full h-14 bg-secondary text-on-secondary font-bold text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-secondary-container transition-all active:scale-[0.98] rounded cursor-pointer"
            >
              LOGIN
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>

          {/* SSO Divider */}
          <div className="relative my-10 flex items-center">
            <div className="flex-grow h-[1px] bg-surface-container-highest"></div>
            <span className="px-4 text-[10px] font-black uppercase tracking-[0.3em] text-outline-variant bg-surface">
              Enterprise Protocol
            </span>
            <div className="flex-grow h-[1px] bg-surface-container-highest"></div>
          </div>

          {/* SSO Action */}
          <button
            className="w-full h-14 border-2 border-primary text-primary font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all rounded"
            type="button"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield_person
            </span>
            Single Sign-On (SSO)
          </button>

          {/* Footer Support */}
          <p className="mt-12 text-center text-xs text-on-surface-variant font-medium">
            Technical difficulties?{" "}
            <Link
              className="text-primary font-bold underline underline-offset-4"
              href="#"
            >
              Contact Site Support
            </Link>
          </p>
        </div>
      </section>

      {/* Blueprint Grid Background Decoration */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]"
        style={{
          backgroundImage:
            "radial-gradient(#192830 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
    </main>
  );
}

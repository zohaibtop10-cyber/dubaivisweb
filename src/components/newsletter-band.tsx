"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, Mail } from "@/components/icons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter subscriber",
          email: email.trim(),
          source: "newsletter",
          message: "Monthly UAE visa updates",
        }),
      });
      if (!response.ok) throw new Error("failed");
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p className="flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-3.5 font-display text-[14px] font-medium text-white">
        <CheckCircle className="h-5 w-5 text-[#4ade80]" /> You’re subscribed — see you next month.
      </p>
    );
  }

  return (
    <div>
      <form
        onSubmit={submit}
        className="flex items-center gap-2 rounded-full bg-white/[0.07] p-1.5 ring-1 ring-white/15 transition focus-within:ring-white/40"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
          <Mail className="h-4 w-4" />
        </span>
        <label htmlFor="footer-newsletter" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="min-w-0 flex-1 bg-transparent text-[14.5px] text-white outline-none placeholder:text-white/40"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      {status === "error" && <p className="mt-2 px-2 text-[13px] text-[#fca5a5]">Please enter a valid email address.</p>}
    </div>
  );
}

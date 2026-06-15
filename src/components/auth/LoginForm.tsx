"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { login, DEMO_CREDENTIALS } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function fillDemoCredentials() {
    setEmail(DEMO_CREDENTIALS.email);
    setPassword(DEMO_CREDENTIALS.password);
    setError("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const ok = login(email, password);
    if (ok) {
      router.push("/admin");
    } else {
      setError("Invalid email or password. Use the demo credentials below.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-1 flex-col justify-center bg-white p-8 lg:p-10">
      <h2 className="font-heading text-xl font-semibold text-brand-navy">
        Sign in
      </h2>
      <p className="mt-1 text-sm text-brand-gray">
        Access your admin dashboard
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="login-email"
            className="mb-1.5 block text-sm font-medium text-brand-navy"
          >
            Email
          </label>
          <Input
            id="login-email"
            type="email"
            placeholder="admin@belacademy.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="login-password"
            className="mb-1.5 block text-sm font-medium text-brand-navy"
          >
            Password
          </label>
          <Input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-brand-gray">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
            />
            Remember me
          </label>
          <button
            type="button"
            className="text-sm font-medium text-brand-gold hover:underline"
            onClick={() => {}}
          >
            Forgot password?
          </button>
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <Button type="submit" className="w-full gap-2" disabled={loading}>
          <LogIn className="h-4 w-4" />
          {loading ? "Signing in..." : "Login"}
        </Button>
      </form>

      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
            Demo Credentials
          </p>
          <button
            type="button"
            onClick={fillDemoCredentials}
            className="text-xs font-medium text-brand-blue hover:underline"
          >
            Use demo credentials
          </button>
        </div>
        <p className="mt-2 text-sm text-brand-gray">
          Email:{" "}
          <span className="font-mono text-brand-navy">
            {DEMO_CREDENTIALS.email}
          </span>
        </p>
        <p className="text-sm text-brand-gray">
          Password:{" "}
          <span className="font-mono text-brand-navy">
            {DEMO_CREDENTIALS.password}
          </span>
        </p>
      </div>
    </div>
  );
}

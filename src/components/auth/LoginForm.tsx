"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="w-full max-w-md"
    >
      <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl lg:p-8">
        <h2 className="font-heading text-xl font-semibold text-white">Sign in</h2>
        <p className="mt-1 text-sm text-slate-300">Access your admin dashboard</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-200">
              Email
            </label>
            <Input
              type="email"
              placeholder="admin@belacademy.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-white/20 bg-white/95"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-200">
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-white/20 bg-white/95"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded border-white/30"
              />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm text-brand-gold hover:underline"
              onClick={() => {}}
            >
              Forgot password?
            </button>
          </div>
          {error ? (
            <p className="text-sm text-red-300">{error}</p>
          ) : null}
          <Button type="submit" className="w-full gap-2" disabled={loading}>
            <LogIn className="h-4 w-4" />
            {loading ? "Signing in..." : "Login"}
          </Button>
        </form>

        <div className="mt-6 rounded-xl border border-brand-gold/30 bg-brand-gold/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">
            Demo Credentials
          </p>
          <p className="mt-2 text-sm text-slate-200">
            Email: <span className="font-mono text-white">{DEMO_CREDENTIALS.email}</span>
          </p>
          <p className="text-sm text-slate-200">
            Password: <span className="font-mono text-white">{DEMO_CREDENTIALS.password}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

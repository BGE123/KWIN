"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid email or password.");
      setIsLoading(false);
    } else {
      // Success! Send them to the dashboard
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-[#1a1543] font-serif mb-2">
            KWIN Admin
          </h1>
          <p className="text-sm text-gray-500">
            Sign in to manage your content
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-black uppercase tracking-widest">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin.org"
              className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-md text-black"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-black uppercase tracking-widest">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-md text-black"
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 text-xs font-bold p-3 rounded-md text-center">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="mt-2 bg-[#a8248c] hover:bg-[#8D288D] text-white rounded-md font-bold text-xs uppercase tracking-widest py-6 transition-colors disabled:opacity-50"
          >
            {isLoading ? "AUTHENTICATING..." : "SIGN IN"}
          </Button>
        </form>
      </div>
    </div>
  );
}

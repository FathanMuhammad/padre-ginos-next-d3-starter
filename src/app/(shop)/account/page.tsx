import type { Metadata } from "next";
import { Suspense } from "react";
import ProfileForm from "@/components/ProfileForm";
import { requireUser } from "@/lib/auth";
import { ROLE_LABELS } from "@/lib/roles";

export const metadata: Metadata = { title: "Akun saya — Padre Gino's" };

export default function AccountPage() {
  return (
    <section className="mx-auto max-w-lg">
      <h1 className="text-3xl font-black">Akun saya</h1>
      <Suspense fallback={<p className="mt-4 animate-pulse text-ink/60">Memuat profil…</p>}>
        <AccountContent />
      </Suspense>
    </section>
  );
}

async function AccountContent() {
  const user = await requireUser();
  return (
    <>
      <p className="mt-1 text-sm text-ink/60">
        @{user.login} · {ROLE_LABELS[user.role]}
      </p>
      <ProfileForm
        profile={{
          name: user.name,
          phone: user.phone,
          address: user.address,
        }}
      />
    </>
  );
}
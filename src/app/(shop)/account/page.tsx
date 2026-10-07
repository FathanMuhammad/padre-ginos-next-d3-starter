import type { Metadata } from "next";

export const metadata: Metadata = { title: "Akun saya — Padre Gino's" };

// TODO P2: only for signed-in users. Show "@login · role" and <ProfileForm />
// filled with the user's current profile. Remember: reading the session is
// request data, so it needs a <Suspense> boundary.
export default function AccountPage() {
  return (
    <section className="mx-auto max-w-lg">
      <h1 className="text-3xl font-black">Akun saya</h1>
      <p className="mt-4 text-ink/60">TODO P2</p>
    </section>
  );
}
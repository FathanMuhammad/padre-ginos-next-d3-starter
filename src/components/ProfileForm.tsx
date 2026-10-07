"use client";

import type { Profile } from "@/lib/types";

// Markup is ready. TODO P2: connect it to updateProfileAction with
// useActionState, show errors per field, keep typed values after an error,
// and show "Profil disimpan." after a successful save.
export default function ProfileForm({ profile }: { profile: Profile }) {
  return (
    <form className="mt-6 flex flex-col gap-4" noValidate>
      <Field label="Nama" name="name" defaultValue={profile.name} />
      <Field label="Telepon" name="phone" defaultValue={profile.phone ?? ""} inputMode="tel" />
      <label className="flex flex-col gap-1">
        <span className="text-sm font-semibold">Alamat pengiriman</span>
        <textarea
          name="address"
          rows={3}
          defaultValue={profile.address ?? ""}
          className="rounded-lg border border-black/10 px-3 py-2 aria-invalid:border-red-500"
        />
      </label>
      <button
        type="submit"
        className="self-start rounded-lg bg-brand px-5 py-2 font-semibold text-white disabled:opacity-50"
      >
        Simpan profil
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  inputMode,
}: {
  label: string;
  name: string;
  defaultValue: string;
  inputMode?: "tel";
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-semibold">{label}</span>
      <input
        name={name}
        defaultValue={defaultValue}
        inputMode={inputMode}
        className="rounded-lg border border-black/10 px-3 py-2 aria-invalid:border-red-500"
      />
    </label>
  );
}
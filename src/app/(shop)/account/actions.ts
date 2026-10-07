"use server";

import type { Profile } from "@/lib/types";

type Field = keyof Profile; // "name" | "phone" | "address"

export type ProfileFormState = {
  ok: boolean;
  errors: Partial<Record<Field | "form", string>>;
  // What the user typed, so the form can show it again after an error
  values: Record<Field, string>;
} | null;

// TODO P2: updateProfileAction
//   1. Siapa? Ambil user dari session (bukan dari form).
//   2. Validasi dengan profileSchema. Gagal → kembalikan errors + values.
//   3. Simpan dengan updateProfile(user.id, data), lalu refresh().
export async function updateProfileAction(
  _prev: ProfileFormState,
  formData: FormData,
): Promise<ProfileFormState> {
  void formData;
  return null;
}
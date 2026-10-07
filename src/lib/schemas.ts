import { z } from "zod";
import { ORDER_STATUSES } from "./orders";

// Validation = is this input well-formed? A schema says it once, on the
// server, instead of a pile of typeof / Number.isInteger checks.

export const orderStatusInput = z.object({
  orderId: z.coerce.number().int().positive(),
  status: z.enum(ORDER_STATUSES),
});

export const profileSchema = z.object({
  name: z
    .string()
    .transform((s) => s.trim())
    .refine((s) => s.length >= 2, { message: "Nama minimal 2 karakter." })
    .refine((s) => s.length <= 40, { message: "Nama maksimal 40 karakter." }),
  phone: z
    .string()
    .transform((s) => {
      const trimmed = s.trim();
      return trimmed === "" ? null : trimmed.replace(/\s+/g, "");
    })
    .nullable()
    .refine(
      (s) => s === null || /^\+?[0-9]{8,15}$/.test(s),
      { message: "Nomor telepon harus 8–15 digit (boleh diawali +)." },
    ),
  address: z
    .string()
    .transform((s) => {
      const trimmed = s.trim();
      return trimmed === "" ? null : trimmed;
    })
    .nullable()
    .refine(
      (s) => s === null || s.length <= 200,
      { message: "Alamat maksimal 200 karakter." },
    ),
});
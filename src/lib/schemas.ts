import { z } from "zod";
import { ORDER_STATUSES } from "./orders";

// Validation = is this input well-formed? A schema says it once, on the
// server, instead of a pile of typeof / Number.isInteger checks.

export const orderStatusInput = z.object({
  orderId: z.coerce.number().int().positive(),
  status: z.enum(ORDER_STATUSES),
});

// TODO P2: profileSchema
//   name:    wajib, 2–40 karakter (setelah trim)
//   phone:   boleh kosong (→ null); kalau diisi 8–15 digit, boleh diawali "+"
//   address: boleh kosong (→ null); maksimal 200 karakter
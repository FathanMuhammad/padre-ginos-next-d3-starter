import { describe, expect, it } from "vitest";
import { profileSchema } from "@/lib/schemas";

describe("profileSchema", () => {
  it("accepts a valid full profile and sanitizes spaces in phone/name", () => {
    const result = profileSchema.safeParse({
      name: "  Citra Dewi  ",
      phone: " +62 812 3456 7890 ",
      address: "Jl. Jenderal Sudirman No. 123",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({
        name: "Citra Dewi",
        phone: "+6281234567890",
        address: "Jl. Jenderal Sudirman No. 123",
      });
    }
  });

  it("converts empty or whitespace phone and address to null", () => {
    const result = profileSchema.safeParse({
      name: "Budi",
      phone: "   ",
      address: "",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({
        name: "Budi",
        phone: null,
        address: null,
      });
    }
  });

  it("rejects invalid name (too short or too long)", () => {
    expect(profileSchema.safeParse({ name: "C", phone: "", address: "" }).success).toBe(false);
    expect(profileSchema.safeParse({ name: "   ", phone: "", address: "" }).success).toBe(false);
    expect(
      profileSchema.safeParse({
        name: "A".repeat(41),
        phone: "",
        address: "",
      }).success,
    ).toBe(false);
  });

  it("rejects invalid phone numbers and overlong addresses", () => {
    expect(profileSchema.safeParse({ name: "Valid Name", phone: "12ab", address: "" }).success).toBe(false);
    expect(profileSchema.safeParse({ name: "Valid Name", phone: "12345", address: "" }).success).toBe(false);
    expect(
      profileSchema.safeParse({
        name: "Valid Name",
        phone: "",
        address: "x".repeat(201),
      }).success,
    ).toBe(false);
  });
});

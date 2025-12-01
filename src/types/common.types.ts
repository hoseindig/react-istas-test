// ============================================
// FILE: src/types/common.types.ts
// ============================================

import { z } from "zod";

// Base Person Schema
export const BasePersonSchema = z.object({
  id: z.string(),
  firstName: z.string().min(1, "نام الزامی است"),
  lastName: z.string().min(1, "نام خانوادگی الزامی است"),
  email: z.string().email("ایمیل نامعتبر است"),
  age: z.number().min(18).max(150),
  phone: z.string().min(10, "شماره تلفن باید حداقل 10 رقم باشد"),
  city: z.string().min(1, "شهر الزامی است"),
  createdAt: z.string(),
});

export type BasePerson = z.infer<typeof BasePersonSchema>;

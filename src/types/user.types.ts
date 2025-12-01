// ============================================
// FILE: src/types/user.types.ts
// ============================================

import { z } from "zod";
import { BasePersonSchema } from "./common.types";

export const UserSchema = BasePersonSchema.extend({
  position: z.string().min(1, "موقعیت شغلی الزامی است"),
  age: z.number().int().min(0, "سن باید عدد صحیح مثبت باشد"),
});

export type User = z.infer<typeof UserSchema>;

export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  city: string;
  phone: string;
  position: string;
  createdAt: string;
}

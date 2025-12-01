// ============================================
// FILE: src/types/user.types.ts
// ============================================

import { z } from "zod";
import { BasePersonSchema } from "./common.types";

export const UserSchema = BasePersonSchema.extend({
  position: z.string().min(1, "موقعیت شغلی الزامی است"),
});

export type User = z.infer<typeof UserSchema>;

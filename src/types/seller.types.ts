// ============================================
// FILE: src/types/seller.types.ts
// ============================================

import { z } from "zod";
import { BasePersonSchema } from "./common.types";

export const SellerSchema = BasePersonSchema.extend({
  salesTarget: z.number().min(0, "هدف فروش باید مثبت باشد"),
  commission: z.number().min(0).max(100, "درصد کمیسیون باید بین 0 تا 100 باشد"),
  region: z.string().min(1, "منطقه الزامی است"),
});

export type Seller = z.infer<typeof SellerSchema>;

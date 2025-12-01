// ============================================
// FILE: src/types/user.types.ts
// ============================================

import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "نام الزامی است"),
  email: z.string().email("ایمیل نامعتبر است"),
  age: z.number().min(0).max(150),
  createdAt: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export interface UserStore {
  users: User[];
  addUser: (user: Omit<User, "id" | "createdAt">) => void;
  removeUser: (id: string) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  clearUsers: () => void;
}

// ============================================
// FILE: src/types/user.types.ts
// ============================================

import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  firstName: z.string().min(1, "نام الزامی است"),
  lastName: z.string().min(1, "نام خانوادگی الزامی است"),
  email: z.string().email("ایمیل نامعتبر است"),
  age: z.number().min(0).max(150),
  phone: z.string().min(10, "شماره تلفن باید حداقل 10 رقم باشد"),
  city: z.string().min(1, "شهر الزامی است"),
  position: z.string().min(1, "موقعیت شغلی الزامی است"),
  createdAt: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export interface StepData {
  step1: User[];
}

export interface UserStore {
  data: StepData;
  addUser: (
    user: Omit<User, "id" | "createdAt">,
    step?: keyof StepData
  ) => void;
  removeUser: (id: string, step?: keyof StepData) => void;
  updateUser: (id: string, user: Partial<User>, step?: keyof StepData) => void;
  clearUsers: (step?: keyof StepData) => void;
  getUsersByStep: (step: keyof StepData) => User[];
}

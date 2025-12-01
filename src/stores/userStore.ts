// ============================================
// FILE: src/stores/userStore.ts
// ============================================

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import type { UserStore, StepData } from "../types/user.types";

const initialData: StepData = {
  users: [
    {
      id: uuidv4(),
      firstName: "علی",
      lastName: "احمدی",
      email: "ali@example.com",
      age: 28,
      phone: "09121234567",
      city: "تهران",
      position: "توسعه‌دهنده فرانت‌اند",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      firstName: "سارا",
      lastName: "محمدی",
      email: "sara@example.com",
      age: 25,
      phone: "09129876543",
      city: "اصفهان",
      position: "طراح UI/UX",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      firstName: "رضا",
      lastName: "کریمی",
      email: "reza@example.com",
      age: 32,
      phone: "09135556677",
      city: "مشهد",
      position: "مدیر پروژه",
      createdAt: new Date().toISOString(),
    },
  ],
  admins: [],
  sellers: [],
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      data: initialData,

      addUser: (user, step = "step1") =>
        set((state) => ({
          data: {
            ...state.data,
            [step]: [
              ...state.data[step],
              {
                ...user,
                id: uuidv4(),
                createdAt: new Date().toISOString(),
              },
            ],
          },
        })),

      removeUser: (id, step = "step1") =>
        set((state) => ({
          data: {
            ...state.data,
            [step]: state.data[step].filter((u) => u.id !== id),
          },
        })),

      updateUser: (id, updatedUser, step = "step1") =>
        set((state) => ({
          data: {
            ...state.data,
            [step]: state.data[step].map((u) =>
              u.id === id ? { ...u, ...updatedUser } : u
            ),
          },
        })),

      clearUsers: (step = "step1") =>
        set((state) => ({
          data: {
            ...state.data,
            [step]: [],
          },
        })),

      getUsersByStep: (step) => {
        return get().data[step] || [];
      },
    }),
    {
      name: "user-storage",
      version: 1,
    }
  )
);

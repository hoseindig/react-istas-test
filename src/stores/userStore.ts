// ============================================
// FILE: src/stores/userStore.ts
// ============================================

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import type { UserStore } from "../types/user.types";

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [
        {
          id: uuidv4(),
          name: "علی احمدی",
          email: "ali@example.com",
          age: 28,
          createdAt: new Date().toISOString(),
        },
        {
          id: uuidv4(),
          name: "سارا محمدی",
          email: "sara@example.com",
          age: 25,
          createdAt: new Date().toISOString(),
        },
        {
          id: uuidv4(),
          name: "رضا کریمی",
          email: "reza@example.com",
          age: 32,
          createdAt: new Date().toISOString(),
        },
      ],
      addUser: (user) =>
        set((state) => ({
          users: [
            ...state.users,
            {
              ...user,
              id: uuidv4(),
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      removeUser: (id) =>
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        })),
      updateUser: (id, updatedUser) =>
        set((state) => ({
          users: state.users.map((u) =>
            u.id === id ? { ...u, ...updatedUser } : u
          ),
        })),
      clearUsers: () => set({ users: [] }),
    }),
    {
      name: "user-storage",
    }
  )
);

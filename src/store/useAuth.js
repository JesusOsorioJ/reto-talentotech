import { create } from 'zustand'

export const useAuth = create(set => ({
  token: null,
  user: null,
  setToken: tk => set({ token: tk }),
  setUser: usr => set({ user: usr }),
  logout: () => set({ token: null, user: null }),
}))

export function getToken() {
  return useAuth.getState().token;
}

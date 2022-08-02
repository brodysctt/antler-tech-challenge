import create from "zustand";

interface Store {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

export const useStore = create<Store>((set) => ({
  email: "",
  password: "",
  setEmail: (email: string) => set(() => ({ email })),
  setPassword: (password: string) => set(() => ({ password })),
}));

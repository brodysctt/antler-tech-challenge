import create from "zustand";

interface Store {
  email: string;
  password: string;
  onboardingStep: number;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  incrementStep: () => void;
  decrementStep: () => void;
}

export const useStore = create<Store>((set) => ({
  email: "",
  password: "",
  onboardingStep: 0,
  setEmail: (email: string) => set(() => ({ email })),
  setPassword: (password: string) => set(() => ({ password })),
  incrementStep: () =>
    set((store) => ({
      onboardingStep: store.onboardingStep + 1,
    })),
  decrementStep: () =>
    set((store) => ({
      onboardingStep: store.onboardingStep - 1,
    })),
}));

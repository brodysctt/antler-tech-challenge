import create from "zustand";

interface Store {
  email: string;
  password: string;
  onboardingStep: number;
  expertise: string;
  linkedIn: string;
  industries: string[];
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  incrementStep: () => void;
  decrementStep: () => void;
  setExpertise: (expertise: string) => void;
  setLinkedIn: (linkedIn: string) => void;
  addIndustry: (industry: string) => void;
  removeIndustry: (industry: string) => void;
}

export const useStore = create<Store>((set) => ({
  email: "",
  password: "",
  onboardingStep: 0,
  expertise: "",
  linkedIn: "",
  industries: [],
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
  setExpertise: (expertise: string) => set(() => ({ expertise })),
  setLinkedIn: (linkedIn) => set(() => ({ linkedIn })),
  addIndustry: (industry: string) =>
    set((store) => ({
      ...store,
      industries: [...store.industries, industry],
    })),
  removeIndustry: (industry: string) =>
    set((state) => ({
      ...state,
      industries: state.industries.filter((i) => i !== industry),
    })),
}));

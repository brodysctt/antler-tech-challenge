import create from "zustand";

interface Store {
  email: string;
  password: string;
  onboardingStep: number;
  expertise: string;
  linkedIn: string;
  industries: string[];
  companyName: string;
  companySize: number;
  companyFunding: number;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  incrementStep: () => void;
  decrementStep: () => void;
  setExpertise: (expertise: string) => void;
  setLinkedIn: (linkedIn: string) => void;
  addIndustry: (industry: string) => void;
  removeIndustry: (industry: string) => void;
  setCompanyName: (companyName: string) => void;
  setCompanySize: (companySize: number) => void;
  setCompanyFunding: (companyFunding: number) => void;
}

export const useStore = create<Store>((set) => ({
  email: "",
  password: "",
  onboardingStep: 0,
  expertise: "",
  linkedIn: "",
  industries: [],
  companyName: "",
  companySize: 0,
  companyFunding: 0,
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
    set((store) => ({
      ...store,
      industries: store.industries.filter((i) => i !== industry),
    })),
  setCompanyName: (companyName: string) => set(() => ({ companyName })),
  setCompanySize: (companySize: number) => set(() => ({ companySize })),
  setCompanyFunding: (companyFunding: number) =>
    set(() => ({ companyFunding })),
}));

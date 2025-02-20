import React, { createContext, useContext, useState } from 'react';

interface OnboardingData {
  identity: string;
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  };
  skills: string[];
}

interface OnboardingContextType {
  data: OnboardingData;
  updateIdentity: (identity: string) => void;
  updateExperience: (experience: OnboardingData['experience']) => void;
  updateSkills: (skills: string[]) => void;
}

const defaultData: OnboardingData = {
  identity: '',
  experience: {
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
  },
  skills: [],
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<OnboardingData>(defaultData);

  const updateIdentity = (identity: string) => {
    setData(prev => ({ ...prev, identity }));
  };

  const updateExperience = (experience: OnboardingData['experience']) => {
    setData(prev => ({ ...prev, experience }));
  };

  const updateSkills = (skills: string[]) => {
    setData(prev => ({ ...prev, skills }));
  };

  return (
    <OnboardingContext.Provider value={{ data, updateIdentity, updateExperience, updateSkills }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
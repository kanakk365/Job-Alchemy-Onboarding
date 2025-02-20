import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IdentitySelection } from "./pages/IdentitySelection";
import { ExperienceDetails } from "./pages/ExperienceDetails";
import { SkillsSelection } from "./pages/SkillsSelection";
import { OnboardingProvider } from "./context/OnboardingContext";
import FloatingFlasks from "./components/FloatingFlasks";

function App() {
  return (
    <BrowserRouter>
      <OnboardingProvider>
        <div className="h-[48rem] w-full bg-white relative flex items-center justify-center">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px),
                radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
              backgroundPosition: "0 0, 10px 10px",
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />

          <FloatingFlasks />

          <div className="relative z-10 w-full">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/onboarding/identity" replace />}
              />
              <Route
                path="/onboarding/identity"
                element={<IdentitySelection />}
              />
              <Route
                path="/onboarding/experience"
                element={<ExperienceDetails />}
              />
              <Route path="/onboarding/skills" element={<SkillsSelection />} />
            </Routes>
          </div>
        </div>
      </OnboardingProvider>
    </BrowserRouter>
  );
}

export default App;

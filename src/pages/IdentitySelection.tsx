import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TestTubesIcon,  FlaskConical, TestTube } from 'lucide-react';
import { useOnboarding } from '../context/OnboardingContext';
import { Button } from '../components/Button';

const identityOptions = [
  {
    id: 'apprentice',
    title: 'Student',
    description: 'Learning the mystical arts',
    icon: TestTube,
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 'adept',
    title: 'Recent Graduate',
    description: 'Mastering basic transmutations',
    icon: TestTubesIcon,
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 'master',
    title: 'Professional',
    description: 'Experienced in the ancient arts',
    icon: FlaskConical,
    gradient: 'from-indigo-500/20 to-blue-500/20'
  },
];

export function IdentitySelection() {
  const navigate = useNavigate();
  const { updateIdentity } = useOnboarding();
  const [selected, setSelected] = useState<string>('');

  const handleNext = () => {
    updateIdentity(selected);
    navigate('/onboarding/experience');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="w-[60%] max-w-[1200px] bg-white rounded-md shadow-2xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto"
        >
    
          <div className="mb-2">
                      <div className="relative h-2  bg-indigo-100/50 rounded-full">
                        <motion.div
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '33%' }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </div>
                      <div className="mt-2 text-sm text-indigo-600/70 text-right">
                        Step 1 of 3
                      </div>
                    </div>

          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center">
              Choose Your Path
            </h1>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Select the alchemical rank that best describes your expertise
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {identityOptions.map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelected(option.id)}
                  className={`
                    cursor-pointer rounded-xl p-8 relative overflow-hidden group
                    ${selected === option.id 
                      ? 'bg-gradient-to-br ' + option.gradient + ' border-2 border-indigo-500' 
                      : 'bg-white border border-gray-200 hover:border-indigo-200'}
                    transition-all duration-200 min-h-[200px] flex flex-col
                  `}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <option.icon className="w-10 h-10 text-indigo-600 mb-6" />
                    <h3 className="font-semibold text-xl text-gray-900 mb-3">{option.title}</h3>
                    <p className="text-base text-gray-600">{option.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleNext}
                disabled={!selected}
                className={`w-full max-w-md py-3 text-lg bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg
                disabled:opacity-50 disabled:cursor-not-allowed
                  ${!selected && 'opacity-50 cursor-not-allowed'}`}
              >
                Begin Journey
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
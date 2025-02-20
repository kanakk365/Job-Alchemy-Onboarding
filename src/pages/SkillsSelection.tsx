import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useOnboarding } from '../context/OnboardingContext';
import { Button } from '../components/Button';

const defaultSkills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
  'Java', 'SQL', 'Git', 'AWS', 'Docker',
  'UI/UX Design', 'Agile', 'Project Management', 'Data Analysis'
];

export function SkillsSelection() {
  const { data, updateSkills } = useOnboarding();
  const [selectedSkills, setSelectedSkills] = useState<string[]>(data.skills);
  const [newSkill, setNewSkill] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const addNewSkill = () => {
    if (newSkill.trim() && !selectedSkills.includes(newSkill.trim())) {
      setSelectedSkills(prev => [...prev, newSkill.trim()]);
      setNewSkill('');
      setIsAdding(false);
    }
  };

  const handleComplete = () => {
    updateSkills(selectedSkills);
   
    console.log('Onboarding completed!');
  };

  return (
    <div className="bg-white w-[60%] p-10 mx-auto rounded-md shadow-2xl flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
      
        <div className="mb-2">
                              <div className="relative h-2  bg-indigo-100/50 rounded-full">
                                <motion.div
                                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                  initial={{ width: "66%" }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                              </div>
                              <div className="mt-2 text-sm text-indigo-600/70 text-right">
                                Step 3 of 3
                              </div>
                            </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Select your skills
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Choose the skills that best represent your expertise
        </p>

        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {defaultSkills.map(skill => (
              <motion.button
                key={skill}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleSkill(skill)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedSkills.includes(skill)
                    ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-500'
                    : 'bg-gray-100 text-gray-800 border border-gray-200 hover:border-indigo-200'}
                `}
              >
                {skill}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {selectedSkills.map(skill => (
              !defaultSkills.includes(skill) && (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="inline-block m-1"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium">
                    {skill}
                    <button
                      onClick={() => toggleSkill(skill)}
                      className="ml-2 text-indigo-600 hover:text-indigo-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {isAdding ? (
          <div className="flex gap-2 mb-8">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter a new skill"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && addNewSkill()}
            />
            <Button onClick={addNewSkill} variant="secondary">
              Add
            </Button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 text-indigo-600 font-medium mb-8"
          >
            <Plus className="w-5 h-5" />
            Add Custom Skill
          </motion.button>
        )}

        <div className="flex justify-center">
          <Button
            onClick={handleComplete}
            disabled={selectedSkills.length === 0}
            className={`w-full max-w-md py-3 text-lg bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg
                disabled:opacity-50 disabled:cursor-not-allowed ${selectedSkills.length === 0 && 'opacity-50 cursor-not-allowed'}`}
          >
            Complete Onboarding
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
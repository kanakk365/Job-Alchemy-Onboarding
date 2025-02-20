import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic } from 'lucide-react';
import { useOnboarding } from '../context/OnboardingContext';
import { Button } from '../components/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CustomDatePicker } from '@/components/ui/date-picker-aria';
import { MagicButton } from '@/components/ui/magic-button';
import { WaveRing } from '@/components/ui/wave-ring';

export function ExperienceDetails() {
  const navigate = useNavigate();
  const { data, updateExperience } = useOnboarding();

  const [formData, setFormData] = useState({
    ...data.experience,
    startDate: data.experience.startDate ? new Date(data.experience.startDate) : undefined,
    endDate: data.experience.endDate ? new Date(data.experience.endDate) : undefined,
  });

  const [isRecording, setIsRecording] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const toggleRecording = useCallback(() => {
    setIsRecording((prev) => !prev);
  }, []);

  const handleNext = useCallback(() => {
    updateExperience({
      ...formData,
      startDate: formData.startDate ? formData.startDate.toISOString() : '',
      endDate: formData.endDate ? formData.endDate.toISOString() : '',
    });
    navigate('/onboarding/skills');
  }, [formData, navigate, updateExperience]);

  const handleDateChange = useCallback(
    (field: 'startDate' | 'endDate') => (date?: Date) => {
      setFormData((prev) => ({ ...prev, [field]: date }));
    },
    []
  );

  const handleMagic = useCallback(() => {
 
    setFormData(prev => ({
      ...prev,
      description: prev.description + " [Enhanced with AI] "
    }));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="w-full max-w-[1000px] bg-white rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
     
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto relative"
        >
      
          <div className="mb-4 sm:mb-6">
            <div className="relative h-2 w-full bg-indigo-100/50 rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                initial={{ width: "33%" }}
                animate={{ width: '66%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-2 text-sm text-indigo-600/70 text-right">
              Step 2 of 3
            </div>
          </div>

  
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-1 sm:mb-2 text-center">
            Chronicle Your Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center">
            Share your mystical experiences and achievements
          </p>

   
          <div className="space-y-6 sm:space-y-8">
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="space-y-2">
                <Label className="text-gray-600">Company</Label>
                <div className="relative">
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-600">Role</Label>
                <div className="relative">
                  <Input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your role"
                  />
                </div>
              </div>
            </div>

  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div>
                <CustomDatePicker
                  label="Start Date"
                  value={formData.startDate}
                  onChange={(date: Date | null): void =>
                    handleDateChange('startDate')(date ? new Date(date.toString()) : undefined)
                  }
                />
              </div>
              <div>
                <CustomDatePicker
                  label="End Date"
                  value={formData.endDate}
                  onChange={(date: Date | null): void  =>
                    handleDateChange('endDate')(date ? new Date(date.toString()) : undefined)
                  }
                />
              </div>
            </div>

     
            <div className="space-y-2">
              <Label className="text-gray-600 text-sm sm:text-base">Chronicle</Label>
              <div className="relative">
                <motion.div
                  animate={isRecording ? {
                    borderColor: '#818CF8',
                    boxShadow: '0 0 12px rgba(129,140,248,0.5)',
                  } : { borderColor: '#E0E7FF', boxShadow: 'none' }}
                  transition={{ duration: 1, repeat: isRecording ? Infinity : 0, ease: 'easeInOut' }}
                  className="rounded-lg border-2 bg-white/50 backdrop-blur-sm overflow-hidden"
                >
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-transparent focus:ring-0 border-none"
                    placeholder="Describe your mystical endeavors..."
                  />
                </motion.div>
                <div className="absolute bottom-3 right-3">
                  <MagicButton onClick={handleMagic} />
                </div>
              </div>
            </div>

 
            <div className="relative flex items-center min-h-[3rem] sm:min-h-[4rem] w-full justify-center">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                <motion.button
                  onClick={toggleRecording}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={
                    isRecording
                      ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 3, -3, 0],
                        }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 1, repeat: isRecording ? Infinity : 0, ease: 'easeInOut' }}
                  className={`absolute inset-0 p-4 rounded-full z-20 shadow-lg ${
                    isRecording 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-indigo-500/30' 
                      : 'bg-white text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  <Mic className="w-6 h-6" />
                </motion.button>
                
                <AnimatePresence>
                  {isRecording && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 z-10"
                    >
                      <WaveRing />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

       
          <div className="mt-6 sm:mt-8 flex justify-center px-4">
            <Button
              onClick={handleNext}
              disabled={!formData.company || !formData.role}
              className={`
                w-full max-w-xs sm:max-w-sm lg:max-w-md
                py-2 sm:py-3 text-base sm:text-lg
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-indigo-500 hover:to-purple-500
                text-white shadow-lg
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              Continue Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { isAudioEnabled, toggleAudio as toggleSound, initAudioSettings, playClickSound } from '../lib/cyberSound';

const CyberContext = createContext();

export function CyberProvider({ children }) {
  const [audioActive, setAudioActive] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    initAudioSettings();
    setAudioActive(isAudioEnabled());
  }, []);

  const handleToggleAudio = () => {
    const newState = toggleSound();
    setAudioActive(newState);
    if (newState) {
      playClickSound();
    }
  };

  const openResume = () => {
    playClickSound();
    setIsResumeOpen(true);
  };

  const closeResume = () => {
    playClickSound();
    setIsResumeOpen(false);
  };

  return (
    <CyberContext.Provider
      value={{
        audioActive,
        toggleAudio: handleToggleAudio,
        isResumeOpen,
        openResume,
        closeResume,
      }}
    >
      {children}
    </CyberContext.Provider>
  );
}

export const useCyber = () => {
  const context = useContext(CyberContext);
  if (!context) {
    throw new Error('useCyber must be used within a CyberProvider');
  }
  return context;
};

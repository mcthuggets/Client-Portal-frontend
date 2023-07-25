import React, { useState, useContext } from 'react';

// Create the context
const SectionContext = React.createContext();

// Create a custom hook to access the context
const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};

// Create a provider to wrap the components that need access to the context
const SectionProvider = ({ children }) => {
  const [sectionName, setSectionName] = useState('Policy');

  return (
    <SectionContext.Provider value={{ sectionName, setSectionName }}>
      {children}
    </SectionContext.Provider>
  );
};

export { SectionProvider, useSectionContext };

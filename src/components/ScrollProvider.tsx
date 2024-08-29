"use client";

import { TNavConfig } from "@/config/nav";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ScrollContextProps {
  activeSection: TNavConfig;
  setActiveSection: React.Dispatch<React.SetStateAction<TNavConfig>>;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<TNavConfig>("Home");

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

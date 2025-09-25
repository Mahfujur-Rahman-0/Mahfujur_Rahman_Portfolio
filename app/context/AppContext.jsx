"use client";

import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

// Custom hook (for convenience)
export function useAppContext() {
	return useContext(AppContext);
}

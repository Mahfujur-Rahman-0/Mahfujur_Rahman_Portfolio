"use client";

import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
	const [devToolsOpen, setDevToolsOpen] = useState(false);

	useEffect(() => {
		const threshold = 60;

		function checkDevTools() {
			const widthDiff = window.outerWidth - window.innerWidth;
			const heightDiff = window.outerHeight - window.innerHeight;
			return widthDiff > threshold || heightDiff > threshold;
		}

		function detectDevTools() {
			setDevToolsOpen(checkDevTools());
		}

		// Run every 500ms
		const interval = setInterval(detectDevTools, 500);

		// Optional: listen for F12, Ctrl+Shift+I, Cmd+Opt+I shortcuts
		function keyListener(e) {
			if (
				e.key === "F12" ||
				(e.ctrlKey && e.shiftKey && e.key === "I") ||
				(e.metaKey && e.altKey && e.key === "I")
			) {
				setDevToolsOpen(true);
			}
		}
		window.addEventListener("keydown", keyListener);

		return () => {
			clearInterval(interval);
			window.removeEventListener("keydown", keyListener);
		};
	}, []);

	return (
		<AppContext.Provider value={{ devToolsOpen }}>
			{children}
		</AppContext.Provider>
	);
}

// Custom hook (for convenience)
export function useAppContext() {
	return useContext(AppContext);
}

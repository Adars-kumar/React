import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // default theme mode
    darkTheme: () => {}, // function to set dark theme
    lightTheme: () => {}, // function to set light theme

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
};
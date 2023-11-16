import { useMemo, useState } from 'react'
import { CssBaseline, PaletteMode, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { ResponsiveDrawer } from './components/ui/ResponsiveDrawer';

const App = () => {
  // Hooks
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');
  const theme = useMemo(
    () => createTheme({ palette: { mode, }, }),
    [mode]
  );

  // Toggle light/dark mode
  const toggleMode = () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveDrawer toggleTheme={toggleMode} />
      </ThemeProvider>
    </>
  )
}

export default App

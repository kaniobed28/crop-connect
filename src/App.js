import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: { main: '#388e3c' }, // Green for farming vibe
    secondary: { main: '#ff9800' }, // Orange for contrast
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
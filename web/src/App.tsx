import './styles/global.css';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;

import { ReactNode } from 'react';
import StyledApp from './StyledApp';

type AppProps = {
  children: ReactNode;
};

const App: React.FC<AppProps> = ({ children }) => {
  return <StyledApp>{children}</StyledApp>;
};

export default App;

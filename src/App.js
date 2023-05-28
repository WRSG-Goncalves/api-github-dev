import React from 'react';

import { Normalize } from 'styled-normalize';


import Theme from './styles/Theme';
import GlobalStyle from './styles/global';
import RoutesAdm from './admroutes';

function App() {
  return (
    <Theme>
      <RoutesAdm />      
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;

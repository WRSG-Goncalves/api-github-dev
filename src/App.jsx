import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Normalize } from "styled-normalize";
import AppRoutes from "./admroutes";

import  GlobalStyle  from "./styles/global";
import Theme from "./styles/Theme";

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
}

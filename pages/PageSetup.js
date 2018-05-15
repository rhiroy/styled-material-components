import React from 'react';
import { Toolbar, ToolbarTitle, ThemeProvider } from '../src';


const PageSetup = ({ children }) => (
  <ThemeProvider>
    <Toolbar>
    <ToolbarTitle>Styled Material Components</ToolbarTitle>
    </Toolbar>
    {children}
  </ThemeProvider>
)

export default PageSetup;

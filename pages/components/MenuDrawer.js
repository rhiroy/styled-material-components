import React from 'react';
import styled from 'styled-components';
import TopLevelMenuItem from './TopLevelMenuItem';
import { Drawer, typography } from '../../src';

const MenuDrawer = ({ drawerShowing, toggleDrawer }) => (
  <div>
    <StyledDrawer
      temporary
      attachment="left"
      open={drawerShowing}
      handleRequestClose={toggleDrawer}
    >
      <div onClick={toggleDrawer}>
        <DrawerHeader>Styled Material Components</DrawerHeader>
      </div>
      <TopLevelMenuItem />
    </StyledDrawer>
  </div>
);

const StyledDrawer = styled(Drawer)`
  overflow: scroll;
`;

const DrawerHeader = styled.div`
  padding: 16px;
  ${typography('title')};
`;

export default MenuDrawer;

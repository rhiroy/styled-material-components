import React from 'react';
import styled from 'styled-components';
import TopLevelMenuItem from './TopLevelMenuItem';
import { Drawer, typography } from '../../src';

const MenuDrawer = ({ drawerShowing, toggleDrawer }) => (
  <div>
    <Drawer temporary attachment="left" open={drawerShowing} handleRequestClose={toggleDrawer}>
      <DrawerHeader>Styled Material Components</DrawerHeader>
      <TopLevelMenuItem />
    </Drawer>
  </div>
);

const DrawerHeader = styled.div`
  padding: 16px;
  ${typography('title')};
`;

export default MenuDrawer;

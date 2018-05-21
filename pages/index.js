import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Drawer, List, ListItem } from '../src';
import PageSetup from './PageSetup';

const HomePage = () => <PageSetup />;

const StyledHomePage = styled(HomePage)`
  padding: 25px;

  & button {
    margin: 16px;
  }
`;

export default StyledHomePage;

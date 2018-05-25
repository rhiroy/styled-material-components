import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import List from '../src/components/List/List';
import ListItem from '../src/components/List/ListItem';
import PageSetup from './PageSetup';

const HomePage = ({ className }) => (
  <PageSetup>
    <List className={className}>
      <h1>Styled Material Components</h1>
      <ListItem>
        <Link href="/avatars"><a>Avatars Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/buttons"><a>Buttons Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/bottomsheets"><a>Bottomsheets Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/cards"><a>Cards Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/checkboxes"><a>Checkboxes Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/chips"><a>Chips Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/dialog"><a>Dialog Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/divider"><a>Divider Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/drawer"><a>Drawers Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/flex-grid"><a>Flex Grid Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/gridlists"><a>Grid Lists Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/icons"><a>Icons Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/lists"><a>Lists Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/menus"><a>Menus Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/tabs"><a>Tabs Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/tables"><a>Tables Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/text-fields"><a>TextFields Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/toolbar"><a>Toolbars Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/tooltip"><a>Tooltip Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/sliders"><a>Sliders Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/snackbar"><a>Snackbar Page</a></Link>
      </ListItem>
      <ListItem>
        <Link href="/switches"><a>Switches Page</a></Link>
      </ListItem>
    </List>
  </PageSetup>
);

const StyledHomePage = styled(HomePage)`
  padding: 25px;

  & button {
    margin: 16px;
  }
`;

export default StyledHomePage;

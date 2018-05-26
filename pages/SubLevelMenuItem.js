import { Component } from 'react';
import styled from 'styled-components';
import { List, MenuItem } from '../src';

const array = [
  { item: 'Avatars Page', link: '/avatars' },
  { item: 'Buttons Page', link: './buttons' },
  { item: 'Bottomsheets Page', link: './bottomsheets' },
  { item: 'Cards Page', link: './cards' },
  { item: 'Checkboxes Page', link: './checkboxes' },
  { item: 'Chips Page', link: './chips' },
  { item: 'Dialog Page', link: './dialog' },
  { item: 'Divider Page', link: './divider' },
  { item: 'Drawers Page', link: './drawer' },
  { item: 'Flex Grid Page', link: './flex-grid' },
  { item: 'Grid Lists Page', link: './gridlists' },
  { item: 'Icons Page', link: './icons' },
  { item: 'Lists Page', link: './lists' },
  { item: 'Menus Page', link: './menus' },
  { item: 'Tabs Page', link: './tabs' },
  { item: 'Tables Page', link: './tables' },
  { item: 'TextFields Page', link: './text-fields' },
  { item: 'Toolbars Page', link: './toolbar' },
  { item: 'Tooltip Page', link: './tooltip' },
  { item: 'Sliders Page', link: './sliders' },
  { item: 'Snackbar Page', link: './snackbar' },
  { item: 'Switches Page', link: './switches' },
];

class SubLevelMenuItem extends Component {
  state = {
    open: false,
    value: '',
  };

  handleSelect = (selectedItem) => {
    const item = selectedItem;
    this.state.open
      ? this.setState({ open: false, value: item })
      : this.setState({ open: true, value: item });
  };
  render() {
    return (
      <List>
        {array.map(element => (
          <Button key={element.item} href={element.link}>
            <MenuItem onClick={() => this.handleSelect(element.item)}>
              <P>{`${element.item}`}</P>
            </MenuItem>
          </Button>
        ))}
      </List>
    );
  }
}

const Button = styled.a`
  color: #585c63;
  text-decoration: none;
`;

const P = styled.p`
  padding-left: 20px;
`;

export default SubLevelMenuItem;

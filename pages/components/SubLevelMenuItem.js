import { Component } from 'react';
import styled from 'styled-components';
import { List, MenuItem } from '../../src';

const array = [
  { item: 'Avatars', link: '/docs/components/avatars' },
  { item: 'Buttons', link: '/docs/components/buttons' },
  { item: 'Bottomsheets', link: '/docs/components/bottomsheets' },
  { item: 'Cards', link: '/docs/components/cards' },
  { item: 'Checkboxes', link: '/docs/components/checkboxes' },
  { item: 'Chips', link: '/docs/components/chips' },
  { item: 'Dialog', link: '/docs/components/dialog' },
  { item: 'Divider', link: '/docs/components/divider' },
  { item: 'Drawers', link: '/docs/components/drawer' },
  { item: 'Flex Grid', link: '/docs/components/flex-grid' },
  { item: 'Grid Lists', link: '/docs/components/gridlists' },
  { item: 'Icons', link: '/docs/components/icons' },
  { item: 'Lists', link: '/docs/components/lists' },
  { item: 'Menus', link: '/docs/components/menus' },
  { item: 'Tabs', link: '/docs/components/tabs' },
  { item: 'Tables', link: '/docs/components/tables' },
  { item: 'TextFields', link: '/docs/components/text-fields' },
  { item: 'Toolbars', link: '/docs/components/toolbar' },
  { item: 'Tooltip', link: '/docs/components/tooltip' },
  { item: 'Sliders', link: '/docs/components/sliders' },
  { item: 'Snackbar', link: '/docs/components/snackbar' },
  { item: 'Switches', link: '/docs/components/switches' },
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

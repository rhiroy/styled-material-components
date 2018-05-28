import { Component } from 'react';
import styled from 'styled-components';
import { List, MenuItem } from '../../src';

const array = [
  { item: 'Avatars', link: '/docs/avatars' },
  { item: 'Buttons', link: '/docs/buttons' },
  { item: 'Bottomsheets', link: '/docs/bottomsheets' },
  { item: 'Cards', link: '/docs/cards' },
  { item: 'Checkboxes', link: '/docs/checkboxes' },
  { item: 'Chips', link: '/docs/chips' },
  { item: 'Dialog', link: '/docs/dialog' },
  { item: 'Divider', link: '/docs/divider' },
  { item: 'Drawers', link: '/docs/drawer' },
  { item: 'Flex Grid', link: '/docs/flex-grid' },
  { item: 'Grid Lists', link: '/docs/gridlists' },
  { item: 'Icons', link: '/docs/icons' },
  { item: 'Lists', link: '/docs/lists' },
  { item: 'Menus', link: '/docs/menus' },
  { item: 'Tabs', link: '/docs/tabs' },
  { item: 'Tables', link: '/docs/tables' },
  { item: 'TextFields', link: '/docs/text-fields' },
  { item: 'Toolbars', link: '/docs/toolbar' },
  { item: 'Tooltip', link: '/docs/tooltip' },
  { item: 'Sliders', link: '/docs/sliders' },
  { item: 'Snackbar', link: '/docs/snackbar' },
  { item: 'Switches', link: '/docs/switches' },
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
      <StyledList>
        {array.map(element => (
          <Button key={element.item} href={element.link}>
            <MenuItem
              key={element.item}
              href={element.link}
              onClick={() => this.handleSelect(element.item)}
            >
              <P>{`${element.item}`}</P>
            </MenuItem>
          </Button>
        ))}
      </StyledList>
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

const StyledList = styled(List)`
  overflow: scroll;
`;

export default SubLevelMenuItem;

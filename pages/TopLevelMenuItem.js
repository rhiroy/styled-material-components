import { Component, Fragment } from 'react';
import Link from 'next/link';
import { List, ListItem, MenuItem, ThemeProvider } from '../src';

const ComponentList = ({ className }) => (
  <List className={className}>
    <ListItem>
      <Link href="/avatars">
        <a>Avatars Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/buttons">
        <a>Buttons Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/bottomsheets">
        <a>Bottomsheets Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/cards">
        <a>Cards Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/checkboxes">
        <a>Checkboxes Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/chips">
        <a>Chips Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/dialog">
        <a>Dialog Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/divider">
        <a>Divider Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/drawer">
        <a>Drawers Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/flex-grid">
        <a>Flex Grid Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/gridlists">
        <a>Grid Lists Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/icons">
        <a>Icons Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/lists">
        <a>Lists Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/menus">
        <a>Menus Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/tabs">
        <a>Tabs Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/tables">
        <a>Tables Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/text-fields">
        <a>TextFields Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/toolbar">
        <a>Toolbars Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/tooltip">
        <a>Tooltip Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/sliders">
        <a>Sliders Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/snackbar">
        <a>Snackbar Page</a>
      </Link>
    </ListItem>
    <ListItem>
      <Link href="/switches">
        <a>Switches Page</a>
      </Link>
    </ListItem>
  </List>
);

export default class TopLevelMenuItem extends Component {
  state = {
    open: false,
    value: '',
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleSelect = (selectedItem) => {
    const item = selectedItem;
    this.state.open
      ? this.setState({ open: false, value: item })
      : this.setState({ open: true, value: item });
  };

  render() {
    return (
      <ThemeProvider>
        <Fragment>
          <MenuItem onClick={() => this.handleSelect('Getting Started')}>Getting Started</MenuItem>
          <MenuItem onClick={() => this.handleSelect('Components')}>Components</MenuItem>
          {this.state.open && this.state.value === 'Components' ? (
            <ComponentList />
          ) : (
            !this.state.open
          )}
          <MenuItem onClick={() => this.handleSelect('More')}>More</MenuItem>
        </Fragment>
      </ThemeProvider>
    );
  }
}

import { Component, Fragment } from 'react';
import styled from 'styled-components';
import { MenuItem } from '../../src';
import SubLevelMenuItem from './SubLevelMenuItem';

const array = [{ item: 'Getting Started' }, { item: 'Components' }, { item: 'More' }];
class TopLevelMenuItem extends Component {
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
    const itemSelected = this.state.value;
    const isItemSelected = this.state.open;
    return (
      <Fragment>
        {array.map(element => (
          <Button key={element.item} href={element.link}>
            <MenuItem onClick={() => this.handleSelect(element.item)}>
              <p>{`${element.item}`}</p>
            </MenuItem>
            {isItemSelected && itemSelected === 'Components' ? (
              <SubLevelMenuItem />
            ) : (
              !isItemSelected
            )}
          </Button>
        ))}
      </Fragment>
    );
  }
}

const Button = styled.a`
  color: #585c63;
  text-decoration: none;
`;

export default TopLevelMenuItem;

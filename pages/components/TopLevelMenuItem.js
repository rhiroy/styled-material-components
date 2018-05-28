import { Component, Fragment } from 'react';
import { MenuItem } from '../../src';
import SubLevelMenuItem from './SubLevelMenuItem';

export default class TopLevelMenuItem extends Component {
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
        <MenuItem onClick={() => this.handleSelect('Getting Started')}>Getting Started</MenuItem>
        <MenuItem onClick={() => this.handleSelect('Components')}>Components</MenuItem>
        {isItemSelected && itemSelected === 'Components' ? <SubLevelMenuItem /> : !isItemSelected}
        <MenuItem onClick={() => this.handleSelect('More')}>More</MenuItem>
      </Fragment>
    );
  }
}

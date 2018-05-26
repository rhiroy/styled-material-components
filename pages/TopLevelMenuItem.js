import { Component, Fragment } from 'react';
import { MenuItem } from '../src';
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
    return (
      <Fragment>
        <MenuItem onClick={() => this.handleSelect('Getting Started')}>Getting Started</MenuItem>
        <MenuItem onClick={() => this.handleSelect('Components')}>Components</MenuItem>
        {this.state.open && this.state.value === 'Components' ? (
          <SubLevelMenuItem />
        ) : (
          !this.state.open
        )}
        <MenuItem onClick={() => this.handleSelect('More')}>More</MenuItem>
      </Fragment>
    );
  }
}

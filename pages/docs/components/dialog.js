import React, { Component } from 'react';
import { Button, Dialog, DialogTitle, DialogBody, DialogFooter } from '../../../src';

const ExampleDialog = ({ title, closeDialog, ...dialogProps }) => (
  <Dialog {...dialogProps}>
    {Boolean(title) && <DialogTitle>{title}</DialogTitle>}
    <DialogBody>Dialog body goes here</DialogBody>
    <DialogFooter>
      <Button onClick={closeDialog}>Cancel</Button>
      <Button onClick={closeDialog}>Confirm</Button>
    </DialogFooter>
  </Dialog>
);

export default class dialogsPage extends Component {
  state = {
    withTitle: false,
    withoutTitle: false,
    left: false,
    right: false,
    customSize: false,
  };

  closeDialog = id =>
    this.setState({
      [id]: false,
    });

  openDialog = id =>
    this.setState({
      [id]: true,
    });

  render() {
    return (
      <div style={{ height: '200vh' }}>
        <h3>Added height on this page for scrolling, should be disabled when modal is open.</h3>
        <ExampleDialog
          open={this.state.withTitle}
          closeDialog={() => this.closeDialog('withTitle')}
          title="a title"
          onClose={() => this.closeDialog('withTitle')}
        />
        <ExampleDialog
          open={this.state.withoutTitle}
          closeDialog={() => this.closeDialog('withoutTitle')}
          onClose={() => this.closeDialog('withoutTitle')}
        />
        <ExampleDialog
          fullscreen
          attachment="left"
          open={this.state.left}
          closeDialog={() => this.closeDialog('left')}
        />
        <ExampleDialog
          fullscreen
          attachment="right"
          open={this.state.right}
          closeDialog={() => this.closeDialog('right')}
        />
        <ExampleDialog
          open={this.state.customSize}
          closeDialog={() => this.closeDialog('customSize')}
          title="Pass your own width prop"
          width={400}
        />
        <Button onClick={() => this.openDialog('withTitle')}>Open a dialog with a title</Button>
        <Button onClick={() => this.openDialog('withoutTitle')}>
          Open a dialog without a title
        </Button>
        <Button onClick={() => this.openDialog('left')}>
          Open a full screen dialog from the left
        </Button>
        <Button onClick={() => this.openDialog('right')}>
          Open a full screen dialog from the right
        </Button>
        <Button onClick={() => this.openDialog('customSize')}>Open a custom-sized Dialog.</Button>
      </div>
    );
  }
}

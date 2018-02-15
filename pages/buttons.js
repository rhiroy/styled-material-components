import React from 'react';
import styled from 'styled-components';
import Button from '../src/components/Button';
import withRipple from '../src/enhancers/withRipple';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

const RippleButton = withRipple(Button);

const ButtonsPage = ({ className }) => (
  <MaterialThemeProvider theme={{ primary: '#03A9F4' }}>
    <div className={className}>
      <h1>Flat Buttons</h1>
      <Button onClick={() => alert('On Click Fired')}>Flat</Button>
      <Button primary>Flat Primary</Button>
      <Button accent>Flat Accent</Button>
      <Button disabled primary onClick={() => alert('This should not fire')}>Disabled</Button>
      <RippleButton>JS Ripple</RippleButton>
      <h1>Raised Buttons</h1>
      <Button raised>Raised</Button>
      <Button raised accent>Accent</Button>
      <Button raised primary disabled onClick={() => alert('This should not fire')}>Disabled</Button>
      <RippleButton raised primary>JS Ripple</RippleButton>
      <Button fab primary>+</Button>
      <Button fab>+</Button>
      <Button fab primary mini>+</Button>
    </div>
  </MaterialThemeProvider>
);

const StyledButtonsPage = styled(ButtonsPage)`
  & button {
    margin: 16px;
  }
`;

export default StyledButtonsPage;

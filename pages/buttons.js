import React from 'react';
import styled from 'styled-components';
import Button from '../src/components/Button';
import withRipple from '../src/enhancers/withRipple';
import MaterialThemeProvider from '../src/theme/ThemeProvider';

const RippleButton = withRipple(Button);

const PlusIcon = () => (
    <svg viewBox="0 0 24 24">
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
);

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
            <h1>Floating Action Buttons</h1>
            <Button fab primary><PlusIcon/></Button>
            <Button fab accent><PlusIcon/></Button>
            <Button fab><PlusIcon/></Button>
            <Button fab primary mini><PlusIcon/></Button>
            <Button fab accent mini><PlusIcon/></Button>
            <Button fab mini><PlusIcon/></Button>
        </div>
    </MaterialThemeProvider>
);

const StyledButtonsPage = styled(ButtonsPage)`
  & button {
    margin: 16px;
  }
`;

export default StyledButtonsPage;

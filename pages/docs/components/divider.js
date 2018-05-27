import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Divider } from '../../../src';

const DividerPageComponent = ({ className }) => (
  <div className={className}>
    <h1>Divider</h1>
    <section>
      <h2>Provides visual space between two areas</h2>
      <div>
        Dividers are full-width by default
        <Divider />
        Passing the optional "inset" prop will add a left margin (defaulting to 16px)
        <Divider inset />
        Passing a string value such as "30px" will create an inset at that value
        <Divider inset="30px" />
        It works with percentages too
        <Divider inset="30%" />
      </div>
    </section>
    <Fragment>
      <StyledIframe
        src="https://codesandbox.io/embed/0w8q60rw0"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />{' '}
    </Fragment>
    <section>
      <h2>Dividers in lists</h2>
      <p>
        See{' '}
        <Link href="/lists">
          <a>the lists page</a>
        </Link>{' '}
        for examples of dividers used in lists
      </p>
    </section>
  </div>
);

const StyledIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
`;

export default styled(DividerPageComponent)``;

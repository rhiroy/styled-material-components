import React, { Component } from 'react';
import styled from 'styled-components';
import elevation from '../../src/mixins/elevation';
import ToolbarComponent from '../components/ToolbarComponent';
import MenuDrawer from '../components/MenuDrawer';

class PageSetup extends Component {
  state = {
    drawerShowing: false,
  };

  toggleDrawer = () => {
    this.setState(prevState => ({
      drawerShowing: !prevState.drawerShowing,
    }));
  };

  render() {
    const { children } = this.props;
    const { drawerShowing } = this.state;
    const toggleDrawer = this.toggleDrawer;
    return (
      <div>
        <ToolbarComponent toggleDrawer={toggleDrawer} drawerShowing={drawerShowing} />
        {drawerShowing && <MenuDrawer toggleDrawer={toggleDrawer} drawerShowing={drawerShowing} />}
        <PageWrapper>
          <Content>{children}</Content>
        </PageWrapper>
      </div>
    );
  }
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  align-items: center;
  padding: 88px 24px 24px;
`;

const Content = styled.div`
  max-width: 960px;
  width: 100%;
  background-color: white;
  ${elevation(4)};
  padding: 24px;
`;

export default PageSetup;

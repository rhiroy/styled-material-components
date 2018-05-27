import styled from 'styled-components';
import elevation from '../../src/mixins/elevation';
import ToolbarComponent from '../components/ToolbarComponent';

const PageSetup = ({ children }) => (
  <div>
    <ToolbarComponent />
    <PageWrapper>
      <Content>{children}</Content>
    </PageWrapper>
  </div>
);

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  width: 100vw;
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

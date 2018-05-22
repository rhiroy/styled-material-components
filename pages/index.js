import styled from 'styled-components';
import PageSetup from './PageSetup';

const HomePage = () => <PageSetup />;

const StyledHomePage = styled(HomePage)`
  padding: 25px;

  & button {
    margin: 16px;
  }
`;

export default StyledHomePage;

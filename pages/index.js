import styled from 'styled-components';

const HomePage = () => (<h1>Home Page</h1>);

const StyledHomePage = styled(HomePage)`
  padding: 25px;

  & button {
    margin: 16px;
  }
`;

export default StyledHomePage;

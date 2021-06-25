import React from 'react';
import styled from 'styled-components';
import Title from 'components/title/Title';

const Main = styled.main`
  height: 100vh;
  background: #252934;
  padding: 1rem;
`;

const IndexPage = () => (
  <Main>
    <Title />
  </Main>
);

export default IndexPage;

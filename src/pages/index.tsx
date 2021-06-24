import React from 'react';
import NavBar from 'components/navbar/NavBar';

const mainStyle = {
  height: '100vh',
  background: '#252934',
} as React.CSSProperties;

// markup
const IndexPage = () => (
  <main style={mainStyle}>
    <NavBar />
    <div>Hello World</div>
  </main>
);

export default IndexPage;

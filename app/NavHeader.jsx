import React from 'react';
import { Header } from 'semantic-ui-react';

const NavHeader = () => (
  <Header
    as="h2"
    style={{
      marginLeft: '20px',
      marginTop: '0',
      marginBottom: '0',
      lineHeight: '40px',
      fontWeight: '400',
      fontSize: '1.5em',
    }}
  >
    Energy and Water Benchmarking
  </Header>

);

export default NavHeader;

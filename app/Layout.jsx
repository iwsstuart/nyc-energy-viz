import React from 'react';
import { Container } from 'semantic-ui-react';
import Nav from './Nav';
import Panel from './Panel';
import LeafletMap from './LeafletMap';
import SearchBar from './SearchBar';

const style = {
  height: 'calc(100% - 40px)',
  position: 'fixed',
  top: '40px',
};

const Layout = () => (
  <div>
    <Nav />
    <Container
      fluid
      style={style}
    >
      <Panel />
      <LeafletMap />
      <SearchBar
        style={{
          position: 'fixed',
          top: '50px',
          right: '20px',
        }}
      />
    </Container>

  </div>
);

export default Layout;

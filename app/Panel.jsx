import React from 'react';
import { Segment } from 'semantic-ui-react';
import Tabs from './Tabs';

const Panel = () => (
  <Segment
    basic
    style={{
      width: '460px',
      height: '100%',
      float: 'left',
      marginBottom: '0',
    }}
  >
    <Tabs />
  </Segment>
);

export default Panel;

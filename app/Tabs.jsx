import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

import Filters from './Filters';
import content from './tabcontent';

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'eui',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeTab: name.toLowerCase() });
  }

  render() {
    const activeTab = this.state.activeTab;

    let tabContent = content.eui;

    const tabStyle = {
      width: '100%',
      flex: 'auto',
      backgroundColor: 'rgba(255,0,0,0.3)',
    };

    if (activeTab === 'water') {
      tabStyle.backgroundColor = 'rgba(0,0,255,0.3)';
      tabContent = content.water;
    } else if (activeTab === 'ghg') {
      tabStyle.backgroundColor = 'rgba(0,255,0,0.3)';
      tabContent = content.ghg;
    } else {
      tabContent = content.eui;
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Menu pointing tabular secondary widths={3} >
          <Menu.Item name="EUI" active={activeTab === 'eui'} onClick={this.handleItemClick} />
          <Menu.Item name="Water" active={activeTab === 'water'} onClick={this.handleItemClick} />
          <Menu.Item name="GHG" active={activeTab === 'ghg'} onClick={this.handleItemClick} />
        </Menu>
        <Filters />
        <Segment
          basic
          style={tabStyle}
        >
          {tabContent}
        </Segment>
      </div>
    );
  }
}

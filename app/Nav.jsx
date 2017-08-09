import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import NavHeader from './NavHeader';

export default class Nav extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const itemStyle = {
      paddingLeft: '50px',
      paddingRight: '50px',
    };

    return (
      <Menu
        secondary
        fixed="top"
        style={{
          backgroundColor: '#f0f0f0',
        }}
      >
        <NavHeader
          style={{ height: '40px' }}
        />
        <Menu.Menu
          position="right"
        >
          <Menu.Item
            name="about"
            active={activeItem === 'about'}
            content="About"
            onClick={this.handleItemClick}
            style={itemStyle}
          />

          <Menu.Item
            name="Data"
            active={activeItem === 'data'}
            content="Data"
            onClick={this.handleItemClick}
            style={itemStyle}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

import React from 'react';
import { Slider, Row, Col } from 'antd';
import 'antd/lib/slider/style/css';
import 'antd/lib/switch/style/css';

class Demo extends React.Component {
  state = {
    disabled: false,
  };
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Row>
          <Col span={6}>
            Year Built
          </Col>
          <Col span={18}>
            <Slider range min={1800} max={2016} defaultValue={[1850, 2000]} disabled={disabled} />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            Floor Area
          </Col>
          <Col span={18}>
            <Slider range min={50000} max={1000000} defaultValue={[75000, 500000]} disabled={disabled} />
          </Col>
        </Row>
      </div>
        // Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
    );
  }
}

export default Demo;

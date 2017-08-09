import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import Demo from './Slider';

import { buildingTypeOptions, reportingYearOptions } from '../config/options';

const Filters = () => (
  <div>
    <div style={{ padding: '15px 0' }}>
      <Dropdown
        style={{ marginRight: '20px' }}
        placeholder="Building Type"
        search
        selection
        options={buildingTypeOptions}
      />
      <Dropdown
        placeholder="Reporting Year"
        search
        selection
        options={reportingYearOptions}
      />
    </div>
    <Demo />
  </div>
);

export default Filters;

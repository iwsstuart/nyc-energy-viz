import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { buildingTypeOptions } from '../config/options';

const Dropdown = () => (
  <Dropdown placeholder="Building Type" search selection options={buildingTypeOptions} />
);

export default Dropdown;

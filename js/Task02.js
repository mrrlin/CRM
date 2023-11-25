'use strict';

import {listIPv4} from './ipv4.js';

const getCountOfUnicIPv4Address = list => {
  return new Set(list).size;
}
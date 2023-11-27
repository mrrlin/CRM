// 'use strict';

import {listIPv4} from './ipv4.js';

const getCountOfUnicIPv4Address = list => new Set(listIPv4).size;

getCountOfUnicIPv4Address(['qwe', 'asd', 'zxc']);

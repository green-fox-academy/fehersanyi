'use strict';

import { test } from 'tape';
import { member, fibo } from './fibonacci';

test('it will work someday', t => {
  t.equal(fibo[1], 1);
  t.equal(fibo[2], 1);
  t.equal(fibo[3], 2);
  t.equal(fibo[4], 3);
  t.equal(fibo[5], fibo[5].valueOf());
  t.end()
})
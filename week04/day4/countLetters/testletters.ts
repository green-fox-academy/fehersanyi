'use strict';

import { test } from 'tape';
import { letterCounter } from './letters';

test('is it working?', t => {
  t.deepEqual(letterCounter('aa'), {a:2});
  t.end()
});
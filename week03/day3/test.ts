'use strict';

import { test } from 'tape';
import { Sharpie } from './07-sharpie';

test('is it sharp?', t => {
  t.equals(new Sharpie('red', 5).color, 'red');
  t.equals(new Sharpie().color, 'red');
  t.equals(new Sharpie().color, 'blue');
  t.end()
})
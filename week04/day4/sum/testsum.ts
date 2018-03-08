'unse strict';

import { test } from 'tape'
import { Sums } from './sum';

test('test em summa', t => {
  t.equal(new Sums().sum(1, 2), 3);
  t.equal(new Sums().sum(-1, -1), -2);
  t.end();
});
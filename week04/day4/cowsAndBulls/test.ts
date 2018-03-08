'use strict';

import { test } from 'tape';
import { Game } from './CAB';

test('papa had a cow', t => {
  t.equal(new Game().CAB(1234), ['cow', 'cow', 'bull', 'cow']);
  t.end();
})
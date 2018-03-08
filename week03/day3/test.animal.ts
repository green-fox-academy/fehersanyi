'use strict';

import { test } from 'tape';
import { Animal } from './06-animal'
test('quack', t => {
  t.equal(new Animal().play() === 'yay');
  t.end()
})

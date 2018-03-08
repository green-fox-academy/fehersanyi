'use strict';

import { test } from 'tape';
import { Apple } from './apple';


test('test dem apples', t => {
  //let alma = new Apple();
  t.equal(new Apple().getApple(),  'apple');
  t.end()
});
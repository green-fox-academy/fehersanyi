'use strict';

import { test } from 'tape';
import { Anagramm } from './anagram';

test('are they anagram', t => {
  t.equal(new Anagramm().anagramm('lol', 'LOL'), true)
  t.end()
});
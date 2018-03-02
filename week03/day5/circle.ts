'use strict';

const canvas = document.querySelector('.main-canvas') as sTMLCanvasElement;
const ctx = canvas.getContext('2d');

function circle(x, y, s) {

ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;  
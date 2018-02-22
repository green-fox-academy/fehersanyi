'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
/*
function drawMeALine(mx, my, lx, ly) {
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(lx, ly);
    ctx.stroke();
}
let mHor: number;
let mVer: number;
let lHor: number;
let lVer: number;
let x = Math.sqrt;*/


ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(30, Math.sqrt(2)*10);
    ctx.lineTo(10, Math.sqrt(2)*10);
    ctx.lineTo(20, 0);
    ctx.stroke();















/*
function makeTriangle() {
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(207.5, 10);
    ctx.lineTo(192.5, 10);
    ctx.lineTo(200, 0);
    ctx.stroke();
}
makeTriangle();*/



'use strict';

const { Buffer } = require('buffer');
const fs = require('fs');
const path = require('path');

const { createCanvas, Image } = require('canvas');
const GIFEncoder = require('gifencoder');
const sharp = require('sharp');

const { renderSVG } = require('./svg');

const outputFilepath = path.resolve(__dirname, '..', 'contributions.gif');

async function main() {
  const { meta, png: firstFrame } = renderPNG();
  const { width, height } = await meta;
  console.log(await meta);

  // await fs.promises.writeFile('contributions.png', await firstFrame);
  const encoder = new GIFEncoder(width, height);
  encoder.createReadStream().pipe(fs.createWriteStream(outputFilepath));

  return streamGIF(encoder, await firstFrame);
}

async function streamGIF(encoder, firstFrame) {
  const img = new Image();
  img.src = firstFrame;

  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');

  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(4000);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, img.width, img.height);
  ctx.drawImage(img, 0, 0);
  encoder.addFrame(ctx);

  encoder.setDelay(100);
  for (let i = 0; i < 20; i++) {
    const { png } = renderPNG();
    img.src = await png;
    ctx.drawImage(img, 0, 0);
    encoder.addFrame(ctx);
  }

  encoder.finish();
}

function renderPNG() {
  const svg = sharp(Buffer.from(renderSVG()));

  return {
    meta: svg.metadata(),
    png: svg.toBuffer(),
  };
}

main()
  .then(function (info) {
    console.log(info);
    process.exit();
  })
  .catch(function (err) {
    console.error(err);
    process.exit(1);
  });

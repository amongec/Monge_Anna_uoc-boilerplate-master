const sharp = require('sharp')
const processedImage = sharp(imagen.buffer)
const fs = require('fs')

const transformer = sharp()
  .resize({
    width: 300,
    height: 200,
    fit: sharp.fit.cover,
    position: sharp.strategy.entropy
  });
  
// Read image data from readableStream
readableStream
  .pipe(transformer)
  .pipe(writableStream)

  sharp(input)
  .extract({ left: leftOffsetPre, top: topOffsetPre, width: widthPre, height: heightPre })
  .resize(width, height)
  .extract({ left: leftOffsetPost, top: topOffsetPost, width: widthPost, height: heightPost })
  .toFile(output, function(err) {
    // Extract a region, resize, then extract from the resized image
  });

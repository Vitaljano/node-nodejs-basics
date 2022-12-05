import { Transform } from "stream";

const transform = async () => {
  const revertTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reverse = chunk.toString().split("").reverse().join("");
      callback(null, reverse);
    },
  });

  process.stdin.pipe(revertTransform).pipe(process.stdout);
};

await transform();

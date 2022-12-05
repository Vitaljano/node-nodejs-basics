import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import path from "path";
import zlib from "zlib";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const decompress = async () => {
  const int = createReadStream(path.join(__dirname, "files", "archive.gz"));
  const out = createWriteStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const unzip = zlib.createUnzip();

  pipeline(int, unzip, out, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Decompress success");
    }
  });
};

await decompress();

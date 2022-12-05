import { createReadStream, createWriteStream } from "fs";
import path from "path";
import zlib from "zlib";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const compress = async () => {
  const int = createReadStream(
    path.join(__dirname, "files", "fileToCompress.txt")
  );
  const out = createWriteStream(path.join(__dirname, "files", "archive.gz"));
  const gzip = zlib.createGzip();

  int.pipe(gzip).pipe(out);
};

await compress();

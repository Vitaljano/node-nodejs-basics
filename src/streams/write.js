import { createWriteStream } from "fs";
import path from "path";
import { stdin } from "process";
import { fileURLToPath } from "url";

const write = async () => {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(dirname, "files", "filetToWrite.txt");

  const writeStream = createWriteStream(filePath);
  process.stdin.pipe(writeStream);
};

await write();

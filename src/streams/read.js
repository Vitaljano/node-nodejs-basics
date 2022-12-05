import path from "path";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";

const read = async () => {
  const dirname = fileURLToPath(path.dirname(import.meta.url));
  const filePath = path.join(dirname, "files", "fileToRead.txt");

  const readableStream = createReadStream(filePath);

  readableStream.on("data", (data) => {
    process.stdout.write(data.toString());
  });

  readableStream.on("error", () => {
    throw new Error("FS operation failed");
  });
};

await read();

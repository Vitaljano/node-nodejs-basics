import { createReadStream } from "fs";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(dirname, "files", "fileToCalculateHashFor.txt");

  const input = createReadStream(filePath);
  const hash = crypto.createHash("sha256");

  input.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();

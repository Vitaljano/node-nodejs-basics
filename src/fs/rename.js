import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePathToRename = path.join(dirname, "files", "wrongFilename.txt");

  try {
    await fs.rename(
      filePathToRename,
      path.join(dirname, "files", "properFilename.md")
    );
    console.log("File was renamed");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();

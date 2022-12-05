import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  try {
    await fs.cp(path.join(dirname, "files"), path.join(dirname, "files_copy"), {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
    console.log("Folder was copied successfully");
  } catch (e) {
    throw Error("FS operation failed");
  }
};

copy();

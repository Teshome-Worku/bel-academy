import fs from "fs";
import path from "path";
const root = path.resolve(".");
function w(rel, c) {
  const p = path.join(root, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, c, "utf8");
}

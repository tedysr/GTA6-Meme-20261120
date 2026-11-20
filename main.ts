// make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01)
// Copies POST.json (which holds the public X post URL) to /output,
// mirroring what the bounty requires: main.ts in repo root that
// copies POST.json to /output. Run with Node.js 22.18+.
import { copyFileSync, mkdirSync } from "node:fs";

mkdirSync("output", { recursive: true });
copyFileSync("POST.json", "output/POST.json");
console.log("POST.json copied to output/POST.json");

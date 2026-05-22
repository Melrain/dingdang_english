/**
 * 下载并解压 Resource Han Rounded CN（业界常称「思源柔黑」）
 * 来源: https://github.com/CyanoHao/Resource-Han-Rounded/releases/tag/v1.910
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const fontsDir = path.join(root, "public", "fonts");
const outDir = path.join(fontsDir, "resource-han-rounded");
const otfPath = path.join(outDir, "ResourceHanRoundedCN-VF.otf");
const archivePath = path.join(fontsDir, "RHR-CN.7z");
const url =
  "https://github.com/CyanoHao/Resource-Han-Rounded/releases/download/v1.910/RHR-CFF2-CN-1.910.7z";

if (fs.existsSync(otfPath)) {
  console.log("✓ 思源柔黑已存在:", otfPath);
  process.exit(0);
}

fs.mkdirSync(outDir, { recursive: true });

console.log("下载 Resource Han Rounded CN …");
const res = await fetch(url);
if (!res.ok) throw new Error(`下载失败: ${res.status}`);
const buf = Buffer.from(await res.arrayBuffer());
fs.writeFileSync(archivePath, buf);

const sevenZip = path.join(
  root,
  "node_modules",
  "7zip-bin",
  "win",
  process.arch === "arm64" ? "arm64" : "x64",
  "7za.exe"
);
if (!fs.existsSync(sevenZip)) {
  console.error("请先安装依赖: npm install");
  process.exit(1);
}

console.log("解压 …");
const r = spawnSync(sevenZip, ["x", archivePath, `-o${outDir}`, "-y"], {
  stdio: "inherit",
});
if (r.status !== 0) process.exit(r.status ?? 1);

if (fs.existsSync(otfPath)) {
  console.log("✓ 完成:", otfPath);
} else {
  console.error("✗ 未找到 OTF，请检查解压结果");
  process.exit(1);
}

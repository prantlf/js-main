import { extname } from 'node:path';
import { fileURLToPath } from 'node:url';

export function isMain(meta) {
  const { main } = meta;
  if (main) return true;
  if (main === false) return false;

  const exe = process.argv[1];
  if (!exe) return false;

  const mod = meta.filename ?? fileURLToPath(meta.url);

  const exeExt = extname(exe);
  if (exeExt) return exe === mod;

  const modExt = extname(mod);
  const curNoExt = modExt ? mod.slice(0, -modExt.length) : mod;
  return exe === curNoExt;
}

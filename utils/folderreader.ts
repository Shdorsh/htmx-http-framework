import { readdirSync } from 'node:fs';
import { resolve } from "path";

const getFolderFiles = (folder: string) => {
  folder = resolve("./", folder);
  return readdirSync(folder);
}

export const importFolder = async <T=any>(folder: string) => {
  const files = getFolderFiles(folder);

  const imports: T[] = [];
  for(const file of files) {
    imports.push(await import(resolve(folder, file)));
  }

  return imports;
}
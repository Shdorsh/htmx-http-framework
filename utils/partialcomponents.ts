import Handlebars from "handlebars";
import { readdirSync, readFileSync } from "node:fs";

const getFilesFromFolder = (subFolder?: string) => {
  const components: Record<string, HandlebarsTemplateDelegate<string>> = {};
  let path = "./view/components";
  let prefix = "";

  // Turn the folders into a capitalized prefix
  if (subFolder) {
    path = `./view/components/${subFolder}`;
    prefix = `/${subFolder}`.replaceAll(/\/[a-z]/g, (letters) =>
      letters[1].toUpperCase()
    );
  }
  const files = readdirSync(path);

  for (const fileOrFolder of files) {
    // If it is a file, add it to the components with capitalized prefix + capitalized name
    if (fileOrFolder.endsWith(".handlebars")) {
      const name =
        prefix +
        fileOrFolder[0].toUpperCase() +
        fileOrFolder.substring(1, fileOrFolder.length - 11);
      const fileContent = readFileSync(
        `${path}/${fileOrFolder}`,
        "utf8"
      ) as unknown as Handlebars.TemplateDelegate<string>;
      components[name] = fileContent;

      // Do the same thing to any subfolders
    } else {
      const folder = subFolder ? `${subFolder}/${fileOrFolder}` : fileOrFolder;
      Object.assign(components, getFilesFromFolder(folder));
    }
  }

  return components;
};

const importPartialComponents = () => {
  const components = getFilesFromFolder();
  Handlebars.registerPartial(components);
};

export default importPartialComponents;

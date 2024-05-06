import {compile} from "handlebars"
import {readFileSync} from "node:fs"
import base from "./rendering/base";
import extractParts from "./rendering/extractParts";


const view = (url: string, context: TemplateSpecification = {}) => {
    url = `./view/pages/${url}.handlebars`;
    const fileData = readFileSync(url, "utf8");

    const extractedData = extractParts(fileData);
    const page = base(
        compile(extractedData.body)(context),
        extractedData.styles,
        extractedData.scripts
    );
    return page;
}

export default view;
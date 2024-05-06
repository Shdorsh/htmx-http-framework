import {compile} from "handlebars"
import {readFileSync} from "node:fs"
import base from "./rendering/base";
import extractParts from "./rendering/extractParts";


const view = (url: string, context: TemplateSpecification = {}) => {
    url = `./view/pages/${url}.handlebars`;
    const fileData = readFileSync(url, "utf8");

    const extractedData = extractParts(fileData);
    const page = compile(base(
        extractedData.body,
        extractedData.styles,
        extractedData.scripts
    ))(context);
    return page;
}

export default view;
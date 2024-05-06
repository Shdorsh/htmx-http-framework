import IExtractedTemplate from "../interfaces/IExtractedTemplate";

export default (template: string): IExtractedTemplate => {
  const extractedStrings: IExtractedTemplate = {
    body: template.match(/(?<=<>)(?:\s|\r|\n)*((?:.|\n|\r)+?)(?:\s|\r|\n)*(?=<\/>)/)?.[1] ?? "",
    styles: [...template.matchAll(/<style(?:.|\n|\r)+?<\/style>/gm)].map((regexarray) => regexarray[0]),
    scripts: [...template.matchAll(/<script(?:.|\n|\r)+?<\/script>/gm)].map((regexarray) => regexarray[0]),
  };

  return extractedStrings;
};

const base = (content = '', styles: string[] = [], scripts: string[] = []) => {
const stylesPart = styles.join("\n");
const scriptPart = scripts.join("\n");

return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="public/css/reset.css"></link>
    ${stylesPart}
  </head>
  <body>
    ${content}
  </body>
  <script src="alpinejs"></script>
  <script src="htmx"></script>
  ${scriptPart}
</html>
`
}

export default base;
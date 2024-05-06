#HTMX HTTP Framework

A framework that bundles multiple libraries to create a well structured starting point from which to build up a real project. This here is still in development sofar.

## Libraries used
- Express.js for the HTTP server, with nodemon for automatic restart
- Dotenv for easy reading of env variables
- Handlebars for view pages and components (actually compiled as partials)
- Automatically serving HTMX for backend queries and Alpine.js for frontend reactivity

## To be done
- Facilitate connection to database with migration, model/query builder (possibly using Knex library)
- Add a fitting bundler and minify code
- Possibly add PostCSS
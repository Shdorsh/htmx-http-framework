import express from "express";
import { importFolder } from "./folderReader";
import importPartialComponents from "./partialcomponents";

// Entrypoint for the server instance, makes sure all is handled by a single instance
const app = express();
app.use('/alpinejs', express.static('./node_modules/alpinejs/dist/cdn.min.js'));
app.use('/htmx', express.static('./node_modules/htmx.org/dist/htmx.min.js'));
app.use('/public', express.static('./public'));

importPartialComponents();
importFolder("routes");

const getApp = () => app;

export default getApp;
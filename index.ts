import { config } from "dotenv";
import getApp from "./utils/express";

config();
const port = process.env.WEBAPP_PORT || 3000;

const app = getApp();

app.listen(port);
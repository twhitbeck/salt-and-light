import express from "express";
import createRouter from "express-promise-router";

import { addRoutes as addApiRoutes } from "./routes/api";

const app = express();
const router = createRouter();

// Setup routes
addApiRoutes(router);

// Server static files from `public` directory
app.use(express.static("public"));
app.use(router);

const port = process.env.PORT ?? "3000";

app.listen(port, () => {
  console.log(`Server listening on :${port}`);
});

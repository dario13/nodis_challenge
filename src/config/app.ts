import setupMiddlewares from "./middlewares";
import setupRoutes from "./routes";
import express from "express";
import mongoose from "mongoose";

const uri: string = "mongodb://0.0.0.0:2717/local";

mongoose.connect(
  uri,
  { useCreateIndex: false, useNewUrlParser: true, useUnifiedTopology: true },
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfully Connected!");
    }
  }
);

const app = express();
setupMiddlewares(app);
setupRoutes(app);

const port = 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;

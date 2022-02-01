import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import routesUsers from "./routes/users";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", routesUsers);

app.get("/", (request: Request, response: Response) => {
  response.send("API em Express com TypeScript");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

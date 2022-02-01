import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.send("Rota de usuários");
});

router.post("/", (req: Request, res: Response) => {
  res.send(req.body);
});

router.put("/:id", (req: Request, res: Response) => {
  res.send({
    params: req.params,
    body: req.body,
  });
});

router.delete("/:id", (req: Request, res: Response) => {
  res.send({
    message: `Excluindo o usuário com id ${req.params.id}`,
    method: req.method,
  });
});

export default router;

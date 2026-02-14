import Router from "express";
import TodosController from "./TodosController.js";

const router = new Router();

router.post("/todos", TodosController.create);
router.put("/todos/:id", TodosController.update);
router.delete("/todos/:id", TodosController.delete);
router.get("/todos", TodosController.getAll);

export default router;

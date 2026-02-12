import TodosService from "./TodosService.js";

class TodosController {
  async create(req, res) {
    try {
      const todo = await TodosService.create(req.body);
      return res.json(todo);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id || req.query.id;
      const updatedTodo = await TodosService.update(id, req.body);
      return res.json(updatedTodo);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id || req.query.id;
      const deletedTodo = await TodosService.delete(id);
      return res.json(deletedTodo);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async getAll(req, res) {
    try {
      const todos = await TodosService.getAll();
      return res.json(todos);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

export default new TodosController();

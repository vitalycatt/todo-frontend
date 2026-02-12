import Todos from "./Todos.js";

class TodosService {
  async create(body) {
    try {
      const createdTodo = await Todos.create(body);
      return createdTodo;
    } catch (e) {
      throw e;
    }
  }

  async update(id, body) {
    try {
      const allowed = ["description", "status"];
      const updates = {};

      Object.keys(body).forEach((key) => {
        if (allowed.includes(key)) {
          updates[key] = body[key];
        }
      });

      const updatedTodo = await Todos.findByIdAndUpdate(id, updates, {
        new: true,
        runValidators: true,
      });

      if (!updatedTodo) {
        throw new Error("Задача не найдена");
      }

      return updatedTodo;
    } catch (e) {
      throw e;
    }
  }

  async delete(id) {
    try {
      const deletedTodo = await Todos.findByIdAndDelete(id);

      if (!deletedTodo) {
        throw new Error("Задача не найдена");
      }

      return deletedTodo;
    } catch (e) {
      throw e;
    }
  }

  async getAll() {
    try {
      const users = await Todos.find();
      return users;
    } catch (e) {
      throw e;
    }
  }
}

export default new TodosService();

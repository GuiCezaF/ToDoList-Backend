const express = require("express");
const tasksController = require("./controllers/TasksController.js");
const tasksMiddleware = require("./Middlewares/TasksMiddleware.js");

const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks",
    tasksMiddleware.validateFieldTitle,
    tasksController.createTask
);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id",
    tasksMiddleware.validateFieldTitle,
    tasksMiddleware.validateFieldStatus,
    tasksController.updateTask
);

module.exports = router;

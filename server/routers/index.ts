import { Router } from "express"
import tasksListController from "../controllers/tasksList";
import taskCreateController from "../controllers/taskCreate";
import taskEditController from "../controllers/taskEdit";
import taskShowController from "../controllers/taskShow";
import taskDeleteController from "../controllers/taskDelete";

const router = Router()

router.get('/tasks', (request, response) => {
    tasksListController(response);
})

router.post('/task', (request, response) => {
    taskCreateController(request, response)
})

router.get('/task/:id', (request, response) => {
    taskShowController(request, response)
})

router.put('/task/:id', (request, response) => {
    taskEditController(request, response)
})

router.delete('/task/:id', (request, response) => {
    taskDeleteController(request, response)
})

export default router;
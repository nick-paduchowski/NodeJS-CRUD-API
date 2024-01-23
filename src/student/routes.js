const { Router } = require('express');
const controller = require('./controller');

const router = Router();

//Get request
router.get('/', controller.getStudents);
router.get("/:id", controller.getStudentById);

//Post requests
router.post("/" , controller.addStudent);

//Put requests
router.put("/:id", controller.updateStudent);


//Delete Requests
router.delete("/:id", controller.removeStudent);


module.exports = router;
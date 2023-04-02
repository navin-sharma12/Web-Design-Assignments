import express from "express";
import * as detailsController from './../controllers/controller.js';
const router = express.Router();
//route are defined over here.
router.route("/")
    .post(detailsController.post)
    .get(detailsController.getAllDetails);

router.route("/:id")
    .get(detailsController.getById)
    .put(detailsController.updatedDetails)
    .delete(detailsController.removeDetails);

router.route("/login")
    .post(detailsController.authenticateUser);

export default router;
import { Router } from "express";
import * as controllers from "../../controllers/watch_list.controller";

const routes = Router();

routes.post("/", controllers.create);
routes.get("/", controllers.getmany);
routes
  .route("/:id")
  .get(controllers.getOne)

export default routes;

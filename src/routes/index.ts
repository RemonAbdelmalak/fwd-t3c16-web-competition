import { Router } from "express";
import userRoutes from "./api/user.routes";
import movieRoutes from "./api/movie.routes";
import watch_list from "./api/watch_list.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);
routes.use("/watched", watch_list);

export default routes;

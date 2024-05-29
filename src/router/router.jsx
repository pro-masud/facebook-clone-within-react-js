import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./PublicRouter";
import privateRoute from "./PrivateRouter";

const router = createBrowserRouter([...publicRouter, privateRoute]);


export default router;
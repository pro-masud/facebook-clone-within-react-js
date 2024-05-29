import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";

const publicRouter = [
    {
        path:"/",
        element: <Home />
    },
    {
        path: "/auth",
        element: <Auth />
    }
];

// public router export here
export default publicRouter;
import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/animals",
                element: <Animals/>,
            },
            {
                path: "/animal/:id",
                element: <Animal/>,
            },
        ]
    }
])
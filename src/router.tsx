import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ResumePrint from "./features/ResumePrint/ResumePrint";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/resume",
        element: <ResumePrint />,
    },
]);
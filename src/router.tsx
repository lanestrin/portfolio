import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ResumePrint from "./features/ResumePrint/ResumePrint";
import CaseStudy from "./features/CaseStudy/CaseStudy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/resume",
        element: <ResumePrint />,
    },
    {
        path: "/case-study",
        element: <CaseStudy />,
    },
]);
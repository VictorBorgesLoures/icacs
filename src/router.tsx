import { createBrowserRouter } from "react-router-dom";
import App from './App';
import ApplicationWrapper from './pages/Application/index.tsx';
import Requisitos from "./pages/Application/Requisitos/index.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: 'app',
                    element: <ApplicationWrapper />,
                    children: [
                        {
                            path: 'requisitos',
                            element: <Requisitos/>
                        }
                    ]
                }
                
            ],
        },
    ]
);

export default router;
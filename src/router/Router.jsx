import HomePage from "../pages/HomePage.jsx";
import {createBrowserRouter} from "react-router-dom";
import RootLayout from "./RootLayout.jsx";

const routes = [
    {
        path:'/',
        element: <RootLayout />,
        children: [
            {
            path: '/',  element: <HomePage />
            }]
    }
];

export const router =  createBrowserRouter(routes);
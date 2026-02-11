import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "@/components/layout/DefaultLayout";
import HomePage from '@/pages/HomePage';
import MoviesPage from "@/pages/MoviesPage";
import SearchPage from "@/pages/SearchPage";

function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultLayout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/find',
                    element: <SearchPage />
                },
                {
                    path: '/movie/:id',
                    element: <MoviesPage />
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}
export default Routes;

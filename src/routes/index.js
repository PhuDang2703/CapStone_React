// import HomeTemplate from './../pages/HomeTemplate'
// import HomePage from '../pages/HomeTemplate/HomePage';
// import AboutPage from '../pages/HomeTemplate/AboutPage';
// import ListMoviePage from '../pages/HomeTemplate/ListMoviePage';
// import AdminTemplate from '../pages/AdminTemplate';
// import DashboardPage from '../pages/AdminTemplate/DashboardPage';
// import AddUserPage from '../pages/AdminTemplate/AddUserPage';
// import AddMoviePage from '../pages/AdminTemplate/AddMoviePage';

import { lazy } from 'react';
import { Route } from 'react-router-dom';

const routes = [
    {
        path: "",
        element: lazy(() => import("../pages/HomeTemplate/HomeTemplate")),
        nested: [
            {
                path: "",
                element: lazy(() => import("../pages/HomeTemplate/HomePage/HomePage")),
            },
            {
                path: "about",
                element: lazy(() => import("../pages/HomeTemplate/AboutPage/AboutPage")),
            },
            {
                path: "listmovie",
                element: lazy(() => import("../pages/HomeTemplate/ListMoviePage/ListMoviePage")),
            },

            {
                path: "detail/:id",
                element: lazy(() => import("../pages/Detail/Detail")),
            },
        ]
    },

    {
        path: "checkout/:id",
        element: lazy(() => import("../pages/CheckoutTemplate/Checkout/Checkout")),
    },

    {
        path: "login",
        element: lazy(() => import("../pages/UserTemplate/UserTemplate")),
        nested: [
            {
                path: "login",
                element: lazy(() => import("../pages/Login/Login")),
            }
        ]
    },

    {
        path: "admin",
        element: lazy(() => import("../pages/AdminTemplate/AdminTemplate")),
        nested: [
            {
                path: "dashboard",
                element: lazy(() => import("../pages/AdminTemplate/Dashboard/Dashboard")),
            },
            {
                path: "showtimes",
                element: lazy(() => import("../pages/AdminTemplate/ShowTime/ShowTime")),
            },
            {
                path: "films",
                element: lazy(() => import("../pages/AdminTemplate/Films/Films")),
            },
            {
                path: "addnew",
                element: lazy(() => import("../pages/AdminTemplate/Films/AddNew/AddNew")),
            },
            {
                path: "edit/:id",
                element: lazy(() => import("../pages/AdminTemplate/Films/Edit/Edit")),
            },
        ]
    }
];

const renderRoutes = () => {
    //map duyệt mảng, nhớ return để trả về mảng mới
    return routes.map((route) => {
        if (route.nested) {
            return <Route key={route.path} path={route.path} element={<route.element />}>
                {/* Giấu ngoặc nhọn là renderingElement */}
                {route.nested.map((item) => {
                    return <Route key={item.path} path={item.path} element={<item.element />} />
                })}
            </Route>

        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}

export default renderRoutes
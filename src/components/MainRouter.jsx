import React from 'react'
import {
    Route,
    Outlet,
    Navigate,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Link
} from "react-router-dom"

import Home from './Home'

const MAIN_PATH = '/jargon-cards-app'
const ABOUT_PATH = `${MAIN_PATH}/about`

function Layout() {
    return <div id="main-layout">
        {/* A "layout route" is a good place to put markup you want to share across all the pages on your site, like navigation. */}
        <nav>
            <ul>
                <li>
                    <Link to={MAIN_PATH}>Home</Link>
                </li>
                <li>
                    <Link to={ABOUT_PATH}>About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/nothing-here">Nothing Here</Link>
                </li>
            </ul>
        </nav>

        <hr />


        {/* An <Outlet> renders whatever child route is currently active, so you can think about this <Outlet> as a placeholder for the child routes we defined above. */}
        <Outlet />
    </div>
}

function NotFoundPage() {
    return <p>Page not found mah friend!</p>
}


export default function MainRouter() {
    /*
    The easiest way to quickly update to a v6.4 is to get the help from createRoutesFromElements 
    so you don't need to convert your <Route> elements to route objects:
    https://reactrouter.com/en/main/routers/picking-a-router
    */
    const browserRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to={MAIN_PATH} />} />

                <Route path={MAIN_PATH} element={<Home />} />
                <Route path={ABOUT_PATH} element={<div>About</div>} />

                {/* Using path="*"" means "match anything", so this route acts like a catch-all for URLs that we don't have explicit routes for. */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    )

    return <RouterProvider router={browserRouter} />
}

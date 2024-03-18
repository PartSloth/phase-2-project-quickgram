import App from './App';
import Home from './components/Home';
import Profile from './components/Profile';
import Favorites from './components/Favorites';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/favorites",
                element: <Favorites />
            }
        ]
    }
]

export default routes;
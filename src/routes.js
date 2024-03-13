import App from './App';
import Home from './components/Home';
import Profile from './components/Profile';

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
        ]
    }
]

export default routes;
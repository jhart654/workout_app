import Home from '../pages/Home'
import About from '../pages/About'
import Calendar from '../pages/Calendar'
import Workouts from '../pages/Workouts'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false
    },
    {
        path: "/about",
        component: About,
        name: "About",
        protected: false
    },
    {
        path: "/calendar",
        component: Calendar,
        name: "Calendar",
        protected: true
    },
    {
        path: "/workouts",
        component: Workouts,
        name: "Workouts",
        protected: true
    }
];

export default routes
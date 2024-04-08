import ROUTES from "./Routes/routesModel";

const loggedInLinks = [
    { to: ROUTES.HOME, children: "Home Page"},
    { to: ROUTES.ADMIN, children: "Admin Panel"},
];

const loggedOutLinks = [
    { to: ROUTES.LOGIN, children: "Login"},
    { to: ROUTES.REGISTER, children: "Sign up"},
];

export { loggedInLinks, loggedOutLinks };
import { loggedInLinks, loggedOutLinks } from "../myLinks";
import NavLinkComponent from "./nav-link";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import nextKey from "generate-my-key"



const Links = () => {

    const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);

    return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {loggedIn &&
            loggedInLinks.map((link) => (
<NavLinkComponent to={link.to} key={nextKey()}>
{link.children}
</NavLinkComponent>
))};

{!loggedIn &&
loggedOutLinks.map((link) => (
<NavLinkComponent to={link.to} key={nextKey()}>
{link.children}
</NavLinkComponent>
))};
        </Box>
    );
};

export default Links;
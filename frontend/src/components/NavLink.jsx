import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
    return (
        <NavLink to={to}>
        <Typography
        marginInline={5}
        mt={1}
        color={'white'}
        >
            {children}
        </Typography>
            </NavLink>
    );
};

export default NavLinkComponent;
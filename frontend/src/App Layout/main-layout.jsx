import Box from '@mui/material/Box';


const Mainlayoutcomp = ({ children }) => {
return (
<Box sx={{minHeight: "85vh"}}>
    {children}
    </Box>
);
};

export { Mainlayoutcomp };
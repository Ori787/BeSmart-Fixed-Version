import CustomPaginationActionsTable from './Destinations Data/destinationsdataTable';
import Box from '@mui/material/Box';
import UsersDataTable from './Users Data/usersDataTable';
import { useLocation } from 'react-router-dom';


const Dashboard = () => {

    const location = useLocation();

    const usersDataPanel = location.pathname == "/admin/users";

    const destinationsDataPanel = location.pathname == "/admin/destinations";

    return (
        <Box>
{usersDataPanel && (
    <UsersDataTable />
)}
{
    destinationsDataPanel && (
        <CustomPaginationActionsTable />
    )
}
        </Box>
    );
};

export default Dashboard;
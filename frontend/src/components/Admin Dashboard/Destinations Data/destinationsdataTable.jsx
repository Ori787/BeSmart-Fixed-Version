import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from "axios";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getToken } from '../../../services/tokenStorage';
import TablePaginationActions from '../TablePaginationActions';
import { useNavigate } from "react-router-dom";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Box from '@mui/material/Box';
import useDestinationClickedHandling from './destinationClickedHandling';


TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const CustomPaginationActionsTable = () => {

  const useHandleDestinationClick = useDestinationClickedHandling();

  const navigate = useNavigate();

  const navigateToEditDestination = () =>  {
    navigate("/editdestination");
};

  const [destinationList, setDestinationList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const response = await axios.get(`/destinations`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
        const data = response.data;
        setDestinationList(data);
      } catch (err) {
        console.log("token", getToken())
        console.error("error", err);
      }
    };
    fetchData();
  }, []);

  const handleDeleteDestination = async (_id) => {
    const deleteURL =  process.env.REACT_APP_SERVER_BASE_URL;
    try {
      const response = await axios.delete(`${deleteURL}/destinations/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      });
      console.log("Destination deleted successfully");
      setDestinationList(prev => prev.filter(dest => dest._id !== _id))
    } catch (err) {
      console.error('Error deleting destination:', err);
    }
  };
  
 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? destinationList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : destinationList
          ).map((destination, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <div>
                <Typography variant='h7' fontWeight={'bold'}>Destination:</Typography>
                <br/>
                {destination.Destination}
                </div>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Button onClick={() => navigateToEditDestination}>
                  <EditIcon/>
                </Button>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Button onClick={() => handleDeleteDestination(destination._id)}>
                  <DeleteOutlineIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
          <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
              <Button onClick={useHandleDestinationClick}  sx={{mt:1, ml: 1, position: 'absolute'}}>
              <AddLocationAltIcon sx={{color: 'black'}} />
              </Button>
            </Box>
            <TablePagination sx={{display: 'flex', ml: 60}}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={destinationList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CustomPaginationActionsTable;

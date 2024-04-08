import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import { SignInSide } from "../components/pages/login-page";
import { SignUp } from "../components/pages/register-page";
import { FlightOffers } from "../Amadeus API/offers";
import AuthGuard from "../Guard/authGuard";
import Dashboard from "../components/Admin Dashboard/dashboard";
import UsersDataTable from "../components/Admin Dashboard/Users Data/usersDataTable";
import CustomPaginationActionsTable from "../components/Admin Dashboard/Destinations Data/destinationsdataTable";
import AdminGuard from "../Guard/adminGuard";
import { HotelOffer } from "../components/hotel-list-card";
import EditUserComp from "../components/pages/editUser-page";
import EditDestinationComp from "../components/pages/editDestination-page";
import DataInsertionForm from "../components/pages/dataInsertionForm";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<SignInSide />}/>

            <Route path={ROUTES.REGISTER} element={<SignUp />}/>

            <Route path={ROUTES.HOME} element={<AuthGuard />}/>

            <Route path={ROUTES.HOTELS} element={
                <AuthGuard>
            <HotelOffer />
            </AuthGuard>
            }/>


            <Route path={ROUTES.HOME} element={<FlightOffers />} />

            <Route path={ROUTES.ADMIN} element={
                <AuthGuard>
             <AdminGuard>
               <Dashboard/>
            </AdminGuard>
            </AuthGuard>
            } />

            <Route path={ROUTES.ADMINUSERSDATA} element={
                 <AuthGuard>
                 <AdminGuard>
            <UsersDataTable />
            </AdminGuard>
            </AuthGuard>
            } />

            <Route path={ROUTES.ADMINDESTINATIONSDATA} element={
                <AuthGuard>
                <AdminGuard>
            <CustomPaginationActionsTable />
            </AdminGuard>
            </AuthGuard>
            } />

<Route path={ROUTES.EDITUSER} element={<EditUserComp />}/>

<Route path={ROUTES.EDITDESTINATION} element={<EditDestinationComp />}/>

<Route path={ROUTES.INSERTINFO} element={<DataInsertionForm />}/>

        </Routes>
    );
};

export default Router;


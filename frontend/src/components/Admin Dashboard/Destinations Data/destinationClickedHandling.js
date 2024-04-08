import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { DestinationclickActions } from "../../../store/addDestinationClick";
import { UserclickActions } from "../../../store/addUserClicked";

const useDestinationClickedHandling = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const useHandleDestinationClick = () => {
        dispatch(DestinationclickActions.didClick());
        dispatch(UserclickActions.didNotClick());
                navigate("/addinfo")
    };
    return useHandleDestinationClick;
};


export default useDestinationClickedHandling
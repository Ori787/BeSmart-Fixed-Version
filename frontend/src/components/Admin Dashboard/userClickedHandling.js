import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { clickActions, UserclickActions } from "../../store/addUserClicked";
import { DestinationclickActions } from "../../store/addDestinationClick";

const useUserClickedHandling = () => {

    const dispatch = useDispatch();

    const addUserClickedState = useSelector((bigPie) => bigPie.addUserClicked.clicked);

    const navigate = useNavigate();

    const useHandleUserClick = () => {
        dispatch(UserclickActions.didClick());
        dispatch(DestinationclickActions.didNotClick());
                navigate("/addinfo")
    }


    return useHandleUserClick;
}


export default useUserClickedHandling;
import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {showLoading, hideLoading} from "../redux/alertsSlice";

function Home() {
    const dispatch = useDispatch();
    const getData = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.get("/api/user/get-user-info-by-id", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            dispatch(hideLoading())
            if (response.data.success) {
                console.log("OK")
            }
        } catch (error) {
            dispatch(hideLoading())
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>Hjemme</div>
    );
}

export default Home;

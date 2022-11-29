import axios from "axios";
import {url} from "../../context/LineChartContext"
const API_URL = "/layout/";

//Add layout

export const addLayout = (layoutInputs) => async (dispatch, getState) => {

    try {

        let token = getState().auth.user.token;

        let config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        let check = await axios.post(url+API_URL, layoutInputs, config);

        
        dispatch({
            type: "ADD_LAYOUT_SUCCESSFULLY"
        });


    } catch (error) {
        let message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.log(error);
        dispatch({
            type: "ADD_LAYOUT_FAIL",
            payload: message
        })

    }
 
};

//Reset after clicking add

export const resetAfterAdding = () => async (dispatch, getState) => {

    dispatch({
        type: "ADD_LAYOUT_RESET"
    })
};

//Remove local storage for a list of charts

export const removeLocalStorageOfLayout = () => async (dispatch, getState) => {
    dispatch({
        type: "REMOVE_ALL"
    });
    localStorage.removeItem("layout");
};
import axios from "axios";

export const FETCH_USER_DATA = 'FETCH_USER_DATA'

export const fetchUserData = () => async (dispatch) => {
    const response = await axios.get('https://ipapi.co/json/')
    dispatch({
        type: FETCH_USER_DATA,
        payload: response.data
    })
}
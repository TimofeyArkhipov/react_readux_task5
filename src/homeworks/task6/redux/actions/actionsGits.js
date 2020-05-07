import apiClient from "../../hooks/apiClient";
import axios from 'axios';

export const FETCH_GITS_REQUEST = 'FETCH_GITS_REQUEST';
export const FETCH_GITS_RESPONSE = 'FETCH_GITS_RESPONSE';

const fetchRequest = () => ({
        type: FETCH_GITS_REQUEST,

})

const fetchResponse = (response) => ({
    type: FETCH_GITS_RESPONSE,
    payload: response.data
});


export default function fetchGists() {
    return dispatch => {
        dispatch(fetchRequest());
        axios.get(`https://api.github.com/gists/public`)
            .then(response => dispatch(fetchResponse(response)))
            .catch(error => console.log('ERROR LIST'));
    }
}

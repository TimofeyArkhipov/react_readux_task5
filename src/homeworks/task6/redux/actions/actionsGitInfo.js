import axios from 'axios';

export const FETCH_GIST_SUCCESS = 'FETCH_GIST_SUCCESS';
export const GIT_INFO = 'GIT_INFO';


const fetchResponse = response => ({
    type: FETCH_GIST_SUCCESS,
    payload: response.data
});

export const showSelectedGist = (id) => ({
    type: GIT_INFO,
    id,
});

export function fetchGitsInfo(url) {
    return dispatch => {
        axios.get(url)
            .then(response => dispatch(fetchResponse(response)))
    }
}











// import apiClient from "../../hooks/apiClient";
// import axios from 'axios';
//
// export const FETCH_GITS_INFO_REQUEST = 'FETCH_GITS_INFO_REQUEST';
// export const FETCH_GITS_INFO_RESPONSE = 'FETCH_GITS_RESPONSE';
// export const GIT_INFO = 'GIT_INFO';
//
//
// const fetchResponse = (response) => ({
//     type: FETCH_GITS_INFO_RESPONSE,
//     payload: response.data
// });
//
//
// export const showGitInfo = (id) => ({
//     type: GIT_INFO,
//     id,
// });
//
//
//
// export default function fetchGitsInfo(url) {
//     console.log(typeof (url));
//     return dispatch => {
//         axios.get(`${url}`)
//             .then(response => dispatch(fetchResponse(response)))
//             .catch(error => console.log('ERROR IN GIT INFO'));
//     }
// }

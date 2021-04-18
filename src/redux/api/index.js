import axios  from "axios";

const baseUrl = 'https://www.omdbapi.com/?apiKey=a8521855'

export const apiCall = (url, data, headers, method) => axios({
    method, 
    url: baseUrl + url,
    data,
    headers
})
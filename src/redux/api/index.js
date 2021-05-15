import axios  from "axios";

const baseUrl = 'https://www.omdbapi.com/?apiKey=a8521855'

const apiKey = process.env.REACT_APP_API_KEY

export const apiCall = (url, data, headers, method) => axios({
    method, 
    url: baseUrl + url,
    headers
})

export const searchByTitle = (query,data,headers,method) => axios({
    method,
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=` + query,
    headers
})

export const getLatest = (query,headers,method) => axios({
    method,
    url: `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`,
    headers
})

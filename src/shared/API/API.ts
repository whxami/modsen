import axios from 'axios';

const BASE_URL = 'https://api.artic.edu/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

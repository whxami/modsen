import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

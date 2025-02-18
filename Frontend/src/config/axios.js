import axios from 'axios';

// Create an instance of axios with default configuration

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
});

export default axiosInstance;
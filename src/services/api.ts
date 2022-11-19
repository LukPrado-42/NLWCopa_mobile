import axios from 'axios';

export const api = axios.create({
    baseURL: "https://bolao-copa-prado.onrender.com"
});
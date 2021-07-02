import Axios from 'axios';
import { api } from '../constants/api';

const axios = Axios.create({
    baseURL: api.API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
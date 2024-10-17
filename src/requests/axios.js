import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost/authorisation_page/backend/public/api'
});

export const getAllUsers = async (token) => {
    return await api.get('/getAllUsers', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export const saveUser = async (data) => {
    return await api.post('/saveUser', data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost/authorisation_page/backend/public/api'
});

export const getDatas = () => {
    return api.get('/data')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

export const saveUser = (data) => {
    return api.post('/saveUser', data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

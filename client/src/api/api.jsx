import axios from "axios";

const client = axios.create({
    baseURL: 'https://fakerestapi.azurewebsites.net/api/v1/Books'
});

export default client;
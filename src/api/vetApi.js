import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const API_URL = 'http://10.0.2.2:8080/api'

const vetApi = axios.create({
    baseURL: API_URL
});

const getToken = async () => {
    return await AsyncStorage.getItem('token')
}

vetApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': getToken()
    }

    return config;
});


export default vetApi;
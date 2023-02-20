import { useDispatch, useSelector } from 'react-redux';
// import Swal from 'sweetalert2';
import { vetApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking());

        try {

            const { data } = await vetApi.post('/auth/login', { email, password });

            await AsyncStorage.setItem('token', data.token);
            // await AsyncStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid, role: data.role }));

        } catch (error) {
            // Swal.fire('Error al Iniciar Sesión', error.response.data?.msg || '---', 'error');
            console.log('Error inicio sesion');
            dispatch(onLogout('Credenciales Incorrectas'));

            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);

        }
    }

    const startRegister = async ({ firstName, lastName, email, password, phone }) => {

        dispatch(onChecking());

        try {

            const { data } = await vetApi.post('/auth/register', { firstName, lastName, email, password, phone });
            console.log(data);
            await AsyncStorage.setItem('token', data.token);
            // localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({ name: data.name, uid: data.uid, role: data.role }));

        } catch (error) {
            // Swal.fire('Error al Registrarse', error.response.data?.msg || '---', 'error');
            console.log('Error al registrarse');
            dispatch(onLogout(error.response.data?.msg || '---'));

            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);

        }

    }

    const checkAuthToken = async () => {

        const token = await AsyncStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {

            const { data } = await vetApi.get('/auth/renew');
            await AsyncStorage.setItem('token', data.token);
            // localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid, role: data.role }));

        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }

    }

    const startLogout = async () => {
        await AsyncStorage.clear();
        // dispatch(onLogoutCalendar());
        dispatch(onLogout());
    }

    return {
        //* PROPERTIES
        errorMessage,
        status,
        user,

        //* METHODS
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }

}
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { vetApi } from '../api';
import { onAddNewRequest, onLoadRequests, onRejectRequest } from '../store';


export const useRequestStore = () => {

    const { requests, activeRequest } = useSelector(state => state.requests);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const startSavingRequest = async (requestAdoption) => {

        try {

            // if (requestAdoption.id) {
            //     //updating
            //     await vetApi.put(`/requests/${requestAdoption.id}`, requestAdoption);
            //     dispatch(onUpdatePet({ ...requestAdoption, rol: user.role }));
            //     return;
            // }
            //creating
            await vetApi.post('/requests', { ...requestAdoption, rol: user.role });
            dispatch(onAddNewRequest({ ...requestAdoption }));
            Swal.fire('Guardado', 'Solicitud generada correctamente, recibirás un correo con la respuesta 🐶', 'success');

        } catch (error) {
            console.log(error);
            Swal.fire('Error al generar solicitud', error.response.data.msg, 'error');
        }
    }

    const startLoadingRequest = async () => {

        try {
            const { data } = await vetApi.get('/requests');
            dispatch(onLoadRequests(data.requests));

        } catch (error) {
            console.log('Error al cargar solicitudes de adopción');
            console.log(error);
        }

    }

    const startAcceptRequest = async (idRequest) => {
        try {
            await vetApi.post(`/requests/accept/${idRequest}`);
            dispatch(onAcceptRequest(idRequest));
        } catch (error) {
            console.log('Error al aceptar solicitud de adopción');
            console.log(error);
        }
    }

    const startDeniedRequest = async (idRequest) => {
        try {
            await vetApi.delete(`/requests/${idRequest}`);
            dispatch(onRejectRequest());
        } catch (error) {
            console.log('Error al eliminar solicitude de adopción');
            console.log(error);
        }
    }

    return {
        //* PROPERTIES
        requests,

        //* METHODS
        startSavingRequest,
        startLoadingRequest,
        startAcceptRequest,
        startDeniedRequest,
    }

}
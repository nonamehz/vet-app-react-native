import { useDispatch, useSelector } from 'react-redux';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
import { vetApi } from '../api';
import { onAddNewPet, onDeletePet, onLoadPets, onSetActivePet, onUpdatePet } from '../store';


export const usePetStore = () => {

    const { pets, activePet } = useSelector(state => state.pets);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const setActivePet = (veterinaryPet) => {
        dispatch(onSetActivePet(veterinaryPet));
    }

    const startSavingImagePet = async (file, idPet) => {
        const formData = new FormData();
        formData.append('archivo', file);
        try {
            await vetApi.put(`/uploads/${idPet}`, formData);
            // Swal.fire('Imagen Guardada', 'Imagen guardada correctamente', 'success');
            console.log('Imagen guardada');
        } catch (error) {
            console.log(error);
            // Swal.fire('Error al guardar imagen', error.response.data.msg, 'error');
            console.log('Error Al guardar imagen');
        }

    }

    const startSavingPet = async (veterinaryPet) => {

        console.log(veterinaryPet);

        try {

            if (veterinaryPet._id) {
                //updating
                await vetApi.put(`/pets/${veterinaryPet._id}`, veterinaryPet);
                dispatch(onUpdatePet({ ...veterinaryPet, rol: user.role }));
                // Swal.fire('Actualizado', 'Mascota actualizada correctamente', 'success');
                console.log('Mascota actualizada');
                return;
            }
            //creating
            const { data } = await vetApi.post('/pets', { ...veterinaryPet, rol: user.role });

            dispatch(onAddNewPet({ ...veterinaryPet, _id: data.pet._id, adopted: data.pet.adopted, state: data.pet.state }));
            // Swal.fire('Guardado', 'Mascota guardada correctamente', 'success');
            console.log('Mascota guardada');

        } catch (error) {
            console.log(error);
            // Swal.fire('Error al guardar', error.response.data.msg, 'error');
            console.log('Error al guardar');
        }
    }

    const startDeletingPet = async (idPet) => {
        try {
            await vetApi.delete(`/pets/${idPet}`);
            dispatch(onDeletePet());

        } catch (error) {
            console.log(error);
            // Swal.fire('Error al eliminar', error.response.data.msg, 'error');
            console.log('Error al elminar');
        }
    }

    const startLoadingPets = async () => {

        try {
            const { data } = await vetApi.get('/pets');
            dispatch(onLoadPets(data.pets));

        } catch (error) {
            console.log('Error al cargar mascotas');
            console.log(`Error cargar mascotas: ${error}`);
        }

    }

    const startGetPet = async (id) => {
        try {
            const { data } = await vetApi.get(`/pets/${id}`);
            console.log(data);
            dispatch(onSetActivePet(data.pet));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        //* PROPERTIES
        activePet,
        pets,
        hasPetSelected: !!activePet,

        //* METHODS
        setActivePet,
        startGetPet,
        startDeletingPet,
        startLoadingPets,
        startSavingPet,
        startSavingImagePet,
    }

}
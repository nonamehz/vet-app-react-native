import { useDispatch, useSelector } from 'react-redux';
import { onOpenRequestModal, onCloseRequestModal, onOpenImageModal, onCloseImageModal } from '../store';


export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isRequestModalOpen,
        isImageModalOpen,
    } = useSelector(state => state.ui);

    const openRequestModal = () => {
        dispatch(onOpenRequestModal());
    }

    const closeRequestModal = () => {
        dispatch(onCloseRequestModal());
    }

    const openImageModal = () => {
        dispatch(onOpenImageModal());
    }

    const closeImageModal = () => {
        dispatch(onCloseImageModal());
    }



    return {
        //* PROPERTIES
        isRequestModalOpen,
        isImageModalOpen,

        //* METHODS
        closeRequestModal,
        openRequestModal,
        openImageModal,
        closeImageModal,
    }

}
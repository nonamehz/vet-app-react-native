import { createSlice } from '@reduxjs/toolkit';


export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isRequestModalOpen: false,
        isImageModalOpen: false,
    },
    reducers: {
        onOpenRequestModal: (state) => {
            state.isRequestModalOpen = true;
        },
        onCloseRequestModal: (state) => {
            state.isRequestModalOpen = false;
        },
        onOpenImageModal: (state) => {
            state.isImageModalOpen = true;
        },
        onCloseImageModal: (state) => {
            state.isImageModalOpen = false;
        },
    }
});


export const { onOpenRequestModal, onCloseRequestModal, onOpenImageModal, onCloseImageModal } = uiSlice.actions;
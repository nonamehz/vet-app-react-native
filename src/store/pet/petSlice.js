import { createSlice } from '@reduxjs/toolkit';


export const petSlice = createSlice({
    name: 'pet',
    initialState: {
        isLoadingPets: true,
        pets: [
            // tempEvent
        ],
        activePet: null
    },
    reducers: {
        onSetActivePet: (state, { payload }) => {
            state.activePet = payload
        },
        onAddNewPet: (state, { payload }) => {
            state.pets.push(payload);
            state.activePet = null;
        },
        onUpdatePet: (state, { payload }) => {
            state.pets = state.pets.map(pet => {

                if (pet._id === payload._id) {
                    return payload;
                }

                return pet;
            });
        },
        onDeletePet: (state) => {
            if (state.activePet) {
                state.pets = state.pets.filter(pet => pet._id !== state.activePet._id);
                state.activePet = null;
            }
        },
        onLoadPets: (state, { payload = [] }) => {
            state.isLoadingPets = false;
            payload.forEach(pet => {
                const exist = state.pets.some(dbPet => dbPet._id === pet._id);
                if (!exist) {
                    state.pets.push(pet);
                }
            });
        },
        //* Para limpiar el store
        // onLogoutCalendar: (state) => {
        //     state.isLoadingEvents = true,
        //         state.events = [],
        //         state.activeEvent = null
        // }
    }
});


export const {
    onAddNewPet,
    onDeletePet,
    onLoadPets,
    onSetActivePet,
    onUpdatePet,
} = petSlice.actions;
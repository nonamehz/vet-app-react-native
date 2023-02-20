import { createSlice } from '@reduxjs/toolkit';


export const requestSlice = createSlice({
    name: 'request',
    initialState: {
        isLoadingRequests: true,
        requests: [
            // tempEvent
        ],
        activeRequest: null
    },
    reducers: {
        onSetActiveRequest: (state, { payload }) => {
            state.activeRequest = payload
        },
        onAddNewRequest: (state, { payload }) => {
            state.requests.push(payload);
            state.activeRequest = null;
        },
        onAcceptRequest: (state, { payload }) => {
            state.requests = state.requests.map(request => {

                if (request._id === payload._id) {
                    return payload;
                }

                return request;
            });
        },
        onRejectRequest: (state) => {
            if (state.activeRequest) {
                state.requests = state.requests.filter(request => request._id !== state.activeRequest._id);
                state.activeRequest = null;
            }
        },
        onLoadRequests: (state, { payload = [] }) => {
            state.isLoadingRequests = false;
            payload.forEach(request => {
                const exist = state.requests.some(dbRequest => dbRequest._id === request._id);
                if (!exist) {
                    state.requests.push(request);
                }
            });
        },
    }
});


export const {
    onAcceptRequest,
    onAddNewRequest,
    onLoadRequests,
    onRejectRequest,
    onSetActiveRequest,
} = requestSlice.actions;
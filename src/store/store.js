import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { petSlice } from './pet';
import { requestSlice } from './request';
import { uiSlice } from './ui';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        pets: petSlice.reducer,
        requests: requestSlice.reducer,
        ui: uiSlice.reducer,
    }
});
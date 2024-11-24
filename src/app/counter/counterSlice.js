import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }; // Ensure you have an initial state defined

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        reset: (state) => {
            state.value = 0;
        },
    }
});

// Export the actions
export const { increment, decrement, reset } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
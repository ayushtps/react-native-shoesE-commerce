import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface initialValType {
  isLoading: boolean;
  data: any;
  isError: boolean;
  errorMessage: string;
}

export const clientPayment: any = createAsyncThunk('payment', async data => {
  try {
    let response = await axios.post(
      'https://0fe8-1-22-54-189.ngrok-free.app/payments/intents',
      data,
    );
    return response.data;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
});

export const getDataValues: initialValType = {
  isLoading: false,
  data: null,
  isError: false,
  errorMessage: '',
};

const PaymentSlice = createSlice({
  name: 'payment',
  initialState: getDataValues,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(clientPayment.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(clientPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(clientPayment.rejected, (state, action) => {
      state.isError = true;
      state.data = action.error.message;
      state.isLoading = true;
    });
  },
});

export default PaymentSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

interface initialValType {
  data: any;
}

export const dataValues: initialValType = {
  data: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: dataValues,
  reducers: {
    addCart(state, action) {
      let index = state.data.findIndex(x => x.id == action.payload.id);
      if (index >= 0) {
        state.data[index].qty += 1;
      } else {
        const temp = {...action.payload, qty: 1};
        state.data.push(temp);
      }
    },
    decItem(state, action) {
      let index = state.data.findIndex(x => x.id == action.payload.id);
      if (state.data[index].qty >= 1) {
        state.data[index].qty -= 1;
      }
    },
    deleteCart(state, action) {
      state.data = state.data.filter(x => x.id !== action.payload.id);
    },
  },
});

export const {addCart, decItem, deleteCart} = CartSlice.actions;

export default CartSlice.reducer;

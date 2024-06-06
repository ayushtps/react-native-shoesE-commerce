import {createSlice} from '@reduxjs/toolkit';

interface initialValType {
  data: any;
}

export const dataValues: initialValType = {
  data: [],
};

const WishListSlice = createSlice({
  name: 'wish',
  initialState: dataValues,
  reducers: {
    addWish(state, action) {
      let index = state.data.findIndex(x => x.id == action.payload.id);
      if (index >= 0) {
        state.data[index].qty += 1;
      } else {
        const temp = {...action.payload, qty: 1};
        state.data.push(temp);
      }
    },
    DeleteWish(state, action) {
      let index = state.data.findIndex(x => x.id == action.payload)
      state.data.splice(index, 1)
  },
  },
});

export const {addWish,DeleteWish} = WishListSlice.actions;

export default WishListSlice.reducer;
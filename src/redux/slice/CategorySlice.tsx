import {createSlice} from '@reduxjs/toolkit';

interface initialValType {
  data: any;
}

export const dataValues: initialValType = {
  data: null,
};

const CategorySlice = createSlice({
  name: 'category',
  initialState: dataValues,
  reducers: {
    categorySelect(state, action) {
      state.data = action.payload;
    },
  },
});

export const {categorySelect} = CategorySlice.actions;

export default CategorySlice.reducer;

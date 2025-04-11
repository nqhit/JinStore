import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [], // Danh sách danh mục
    add: {
      isFetching: false,
      error: null, // Thay vì boolean, lưu thông tin lỗi chi tiết
      success: false,
    },
  },
  reducers: {
    addStart: (state) => {
      state.add.isFetching = true;
      state.add.error = null;
      state.add.success = false;
    },
    addSuccess: (state, action) => {
      state.add.isFetching = false;
      state.add.success = true;
      state.add.error = null;
      state.categories.push(action.payload);
    },
    addFailed: (state, action) => {
      state.add.isFetching = false;
      state.add.error = action.payload;
      state.add.success = false;
    },

    //NOTE: Reset trạng thái (tùy chọn)
    resetAddState: (state) => {
      state.add.isFetching = false;
      state.add.error = null;
      state.add.success = false;
    },
  },
});

export const { addStart, addSuccess, addFailed, resetAddState } = categoriesSlice.actions;
export default categoriesSlice.reducer;

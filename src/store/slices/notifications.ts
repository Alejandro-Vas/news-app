import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState: any[] = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    enqueueSnackbar(state, { payload }) {
      const { options } = payload;
      const key = (options && options.key) || uuidv4();

      return [
        ...state,
        {
          ...payload,
          key,
          options: {
            ...payload.options,
          },
        },
      ];
    },

    removeSnackbar(state, action) {
      return [...state.filter((notification) => notification.key !== action.payload)];
    },
  },
});

export default notificationsSlice;
export const notificationsActions = notificationsSlice.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OptionsObject, SnackbarMessage } from 'notistack';
import { v4 as uuidv4 } from 'uuid';

interface INotification {
    key: string
    dismissed?: boolean
    message: SnackbarMessage,
    options?: OptionsObject
  }

const initialState = <INotification[]>[];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    // TODO type payload
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

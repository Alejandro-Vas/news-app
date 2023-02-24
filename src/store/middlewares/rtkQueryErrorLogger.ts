import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { notificationsActions } from 'store/slices/notifications';

const rtkQueryErrorLogger: Middleware = ({ dispatch }) => (next) => (action) => {
  const { enqueueSnackbar } = notificationsActions;

  if (isRejectedWithValue(action)) {
    const errorMessage = action.payload?.data?.fault?.faultstring || action.payload?.error || 'Unexpected Error';
    dispatch(enqueueSnackbar({
      message: errorMessage,
      options: {
        variant: 'error',
      },
    }));
  }

  return next(action);
};

export default rtkQueryErrorLogger;

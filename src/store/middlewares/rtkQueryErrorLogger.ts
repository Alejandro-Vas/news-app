import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action.payload?.error)) {
    // TODO add notistack in redux and enqueue action
    // eslint-disable-next-line no-console
    console.error(action.payload?.data?.fault?.faultstring || action.payload?.error || 'Unexpected Error');
  }

  return next(action);
};

export default rtkQueryErrorLogger;

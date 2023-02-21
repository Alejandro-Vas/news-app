import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'

const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // TODO add notistack in redux adn enqueue action
  if (isRejectedWithValue(action.payload?.error)) {
    console.error(action.payload?.data?.fault?.faultstring || action.payload?.error || 'Unexpected Error')
  }

  return next(action)
}

export default rtkQueryErrorLogger

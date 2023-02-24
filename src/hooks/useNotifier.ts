import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import useActions from 'hooks/useActions';
import { useTypedSelector } from './useTypedSelector';

let displayedKeys:(string| number)[] = [];

const useNotifier = () => {
  const dispatch = useDispatch();

  const notifications = useTypedSelector((state) => state.notifications || []);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { removeSnackbar } = useActions();

  const storeDisplayed = (id:string | number) => {
    displayedKeys = [...displayedKeys, id];
  };

  const removeDisplayed = (id: string | number) => {
    displayedKeys = [...displayedKeys.filter((key) => id !== key)];
  };

  useEffect(() => {
    (notifications || []).forEach(({
      key, message, options = {}, dismissed = false,
    }) => {
      if (dismissed) {
        closeSnackbar(key);
        return;
      }

      if (displayedKeys.includes(key)) return;

      enqueueSnackbar(message, {
        key,
        ...options,
        onClose: (event, reason, myKey) => {
          if (options.onClose) {
            options.onClose(event, reason, myKey);
          }
        },
        onExited: (event, myKey) => {
          removeSnackbar(myKey);
          removeDisplayed(myKey);
        },
      });

      storeDisplayed(key);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch, removeSnackbar]);
};

export default useNotifier;

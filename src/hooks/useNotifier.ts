import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import useActions from 'hooks/useActions';
import { useTypedSelector } from './useTypedSelector';

let displayed = [];

const useNotifier = () => {
  const dispatch = useDispatch();

  const notifications = useTypedSelector((state) => state.notifications || []);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { removeSnackbar } = useActions();

  const storeDisplayed = (id:string | number) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: string | number) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  useEffect(() => {
    (notifications || []).forEach(({
      key, message, options = {}, dismissed = false,
    }) => {
      if (dismissed) {
        closeSnackbar(key);
        return;
      }

      if (displayed.includes(key)) return;

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

  console.log(displayed);
};

export default useNotifier;

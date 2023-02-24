import { useState, forwardRef } from 'react';
import useActions from 'hooks/useActions';

import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';

import { TransitionProps } from '@mui/material/transitions';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Transition = forwardRef((
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
// eslint-disable-next-line react/jsx-props-no-spreading
) => <Slide direction="up" ref={ref} {...props} />);

function ClearDialog() {
  const { favoriteArticles = [] } = useTypedSelector((state) => state.favorite);
  const { clearFavorite, enqueueSnackbar } = useActions();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    clearFavorite();

    enqueueSnackbar({
      message: 'Favorite articles list cleared successfully',
      options: {
        variant: 'success',
      },
    });

    setOpen(false);
  };

  if (!favoriteArticles.length) {
    return null;
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        CLEAR
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <WarningAmberOutlinedIcon
            color="info"
            fontSize="large"
            sx={{ verticalAlign: 'bottom' }}
          />
          {' '}
          Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want to clear your favorite articles list?
            <p />

            <strong>This action cannot be undone </strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk} color="error">
            YES, CLEAR
          </Button>
          <Button onClick={handleClose} variant="outlined">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ClearDialog;

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notificationsActions } from 'store/slices/notifications';
import { articleSearchQueryActions } from '../store/slices/articleSearchQuery';
import { favoriteActions } from '../store/slices/favorite';

const AllActions = {
  ...articleSearchQueryActions,
  ...favoriteActions,
  ...notificationsActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;

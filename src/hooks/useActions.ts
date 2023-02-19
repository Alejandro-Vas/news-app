import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { articleSearchQueryActions } from '../store/articleSearchQuery/articleSearchQuerySlice';
import { favoriteActions } from '../store/favorite/favoriteSlice';

const AllActions = {
  ...articleSearchQueryActions,
  ...favoriteActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;

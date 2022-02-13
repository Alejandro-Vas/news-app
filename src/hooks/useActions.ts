import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { articleSearchQueryActions } from "../store/articleSearchQuery/articleSearchQuerySlice";

const AllActions = {
  ...articleSearchQueryActions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;

import { useMemo } from 'react';
import { bindActionCreators } from 'redux';

export default (actions, dispatch) => {
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [dispatch, actions]
  );
};

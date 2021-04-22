import axios from 'axios';
import { Dispatch } from 'redux';
import { Action } from '../actions';
import { ActionTypes } from '../action-types';

export const searchRepositories = (term: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });
    axios
      .get(`http://registry.npmjs.com/-/v1/search?text=${term}&size=10`)
      .then((res) => {
        const { objects } = res.data;
        const packages: string[] = objects.map(
          (object: { package: { name: string } }) => object.package.name
        );
        dispatch({
          type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
          payload: packages,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      });
  };
};

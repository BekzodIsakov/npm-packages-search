import { ActionTypes } from '../action-types';

interface ActionSearchRepositories {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

interface ActionSearchRepositoriesSuccess {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface ActionSearchRepositoriesError {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | ActionSearchRepositories
  | ActionSearchRepositoriesSuccess
  | ActionSearchRepositoriesError;

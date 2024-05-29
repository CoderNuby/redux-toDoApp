import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';
import { FilterType } from './filterType';

export const initialState: FilterType = "all" as FilterType;

export const filterReducer = createReducer(
  initialState,
  on(actions.setFilter, (state, props) => props.filter)
);
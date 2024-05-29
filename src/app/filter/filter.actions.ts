
import { createAction, props } from '@ngrx/store';
import { FilterType } from './filterType';

export const setFilter = createAction('[Filter] Set filter', props<{filter: FilterType}>());



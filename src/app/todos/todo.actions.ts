import { createAction, props } from '@ngrx/store';

export const create = createAction('[ToDo] Create', props<{text: string}>());
export const toggleCompleted = createAction('[ToDo] Toggle Completed', props<{id: number}>());
export const editText = createAction('[ToDo] Edit Text', props<{id: number, text: string}>());
export const deleteToDo = createAction('[ToDo] Delete', props<{id: number}>());
export const toggleAllCompleted = createAction('[ToDo] Toggle All Completed', props<{completedAll: boolean}>());
export const deleteCompleteds = createAction('[ToDo] Delete All Completeds');


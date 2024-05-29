import { ActionReducerMap } from "@ngrx/store";
import { ToDo } from "./todos/models/todo.model";
import { toDoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filter/filter.reducer";
import { FilterType } from "./filter/filterType";



export interface AppState {
    toDo: ToDo[],
    filter: FilterType
}

export const appReducers: ActionReducerMap<AppState> = {
    toDo: toDoReducer,
    filter: filterReducer
}
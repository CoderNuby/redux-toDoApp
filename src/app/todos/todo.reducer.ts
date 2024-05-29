import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { ToDo } from './models/todo.model';

export const initialState: ToDo[] = [
  new ToDo("Clean my house")
];

export const toDoReducer = createReducer(
  initialState,
  on(actions.create, (state, props) => [...state, new ToDo(props.text)]),
  on(actions.toggleCompleted, (state, props) => {
    return state.map(x => {
      if(x.id === props.id){
        return {
          ...x,
          completed: !x.completed
        }
      }else{
        return x;
      }
    });
  }),
  on(actions.editText, (state, props) => {
    return state.map(x => {
      if(x.id === props.id){
        return {
          ...x,
          text: props.text
        }
      }else{
        return x;
      }
    });
  }),
  on(actions.deleteToDo, (state, props) => state.filter(x => x.id !== props.id)),
  on(actions.toggleAllCompleted, (state, props) => {
    return state.map(x => {
      return {
        ...x,
        completed: props.completedAll
      }
    });
  }),
  on(actions.deleteCompleteds, (state) => state.filter(x => !x.completed))
);
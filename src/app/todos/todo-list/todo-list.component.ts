import { Component } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { FilterType } from '../../filter/filterType';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  items: ToDo[] = [];

  filter: FilterType = "all";

  constructor(private store: Store<AppState>){
    this.store.subscribe((state) => {
      this.items = state.toDo;
      this.filter = state.filter;
    });
  }
}

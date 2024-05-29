import { Component } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {

  completedAll: boolean = false;

  constructor(private store: Store<AppState>){

  }

  toggleAll() {
    this.completedAll = !this.completedAll;

    this.store.dispatch(actions.toggleAllCompleted({completedAll: this.completedAll}));
  }
}

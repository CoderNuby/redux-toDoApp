import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor(private store: Store<AppState>){
    this.txtInput = new FormControl("", Validators.required);
  }

  addToDo() {
    if(this.txtInput.invalid) return;

    this.store.dispatch(actions.create({text: this.txtInput.value}));
    this.txtInput.reset();
  }
}

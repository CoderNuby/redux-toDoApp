import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() toDo: ToDo = new ToDo("");
  @ViewChild("inputEditing") inputEditing!: ElementRef;

  checkCompleted: FormControl = new FormControl();
  txtInputEditing: FormControl = new FormControl();

  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.toDo.completed);
    this.txtInputEditing = new FormControl(this.toDo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggleCompleted({id: this.toDo.id}));
    });
  }

  editingText() {
    this.editing = true;
    this.txtInputEditing.setValue(this.toDo.text);
    setTimeout(() => {
      this.inputEditing.nativeElement.select();
    }, 100);
  }

  editText(){
    this.editing = false;
    if(this.txtInputEditing.invalid || this.txtInputEditing.value === this.toDo.text) return;
    this.store.dispatch(actions.editText({id: this.toDo.id, text: this.txtInputEditing.value}));
  }

  deleteToDo(){
    this.store.dispatch(actions.deleteToDo({id: this.toDo.id}));
  }
}

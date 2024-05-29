import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilterType } from '../../filter/filterType';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as filterActions from '../../filter/filter.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  @ViewChild("btnDeleteCompleteds") btnDeleteCompleted!: ElementRef;

  filterSelected: FilterType = "all" as FilterType;
  filters: FilterType[] = ["all", "pendings", "completed"];
  numberOfToDos: number = 0;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filterSelected = state.filter;
      if(this.filterSelected === "pendings"){
        this.numberOfToDos = state.toDo.filter(x => !x.completed).length;
      }else if(this.filterSelected === "completed"){
        this.numberOfToDos = state.toDo.filter(x => x.completed).length;
      }else{
        this.numberOfToDos = state.toDo.length;
      }
    });
  }

  changeFilter(value: FilterType){
    if(value === this.filterSelected) return;
    this.store.dispatch(filterActions.setFilter({filter: value}));
  }

  deleteCompleteds() {
    this.store.dispatch(todoActions.deleteCompleteds());
    this.btnDeleteCompleted.nativeElement.blur();
  }
}

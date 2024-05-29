import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './models/todo.model';
import { FilterType } from '../filter/filterType';

@Pipe({
  name: 'filterToDo'
})
export class FilterPipe implements PipeTransform {

  transform(toDo: ToDo[], filter: FilterType): ToDo[] {
    if(filter === "pendings"){
      return toDo.filter(x => !x.completed);
    }else if(filter === "completed"){
      return toDo.filter(x => x.completed);
    }else{
      return toDo;
    }
  }

}

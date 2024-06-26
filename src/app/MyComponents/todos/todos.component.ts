import { Component,OnInit } from '@angular/core';
import { Todo } from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos:Todo[];

  localItem!: string | null;
  constructor(){
    this.todos=[ ];
  }
  ngOnInit(): void {
    // this.localItem=localStorage.getItem("todo");
    // if(this.localItem==null){
    //   this.todos=[];
    // }
    // else{
    //   this.todos=JSON.parse(this.localItem)
    // }
}

  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}

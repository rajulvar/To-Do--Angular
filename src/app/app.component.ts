import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "./create-task/task.model";
import Tasks from './_Files/Tasks.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList:Task[]=Tasks
  @Output() taskToBeEdit = new EventEmitter<Task>();

  taskListLength:number = 0 + Tasks.length
  getTask(feature:Task){
    console.log(this.taskList)
    this.taskList.push(feature)
    console.log(this.taskList)
    this.taskListLength = this.taskList.length
  }
  clearAll(){
    this.taskList = []
    this.taskListLength = 0
  }
  onDeleteTask(index:number){
    this.taskList.splice(index,1)
    this.taskListLength--;
  }
  clearSelected(){
    let j:number = 0
    for(let i=0; i< this.taskList.length;i++ ){
      if(this.taskList[i].assigned==true){
        this.taskList.splice(i,1)
        j++
      }
    }
    this.taskListLength = this.taskListLength - j;
  }
}

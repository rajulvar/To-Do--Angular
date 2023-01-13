import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "./task.model";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit{
  taskName:string ='';
  taskType:string ='';
  dateAndTime:string;
  checked:boolean= false;



  @Output() taskCreator = new EventEmitter<Task>();
constructor() {
}
ngOnInit() {

}
onCreate(){
  this.taskCreator.emit({
    taskName : this.taskName,
    taskType : this.taskType,
    assignedDate : this.dateAndTime,
    assigned: false
  })
  this.dateAndTime =''
  this.checked = false
  this.taskType=''
  this.taskName=''
}
}

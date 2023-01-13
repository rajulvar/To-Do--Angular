import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../create-task/task.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() currentTask: Task;
  @Output() editInit = new EventEmitter<Task>();
  @Output() deleteInit = new EventEmitter<void>();
  @Output() completeInit = new EventEmitter<void>();

  editorMode:boolean=false
  isChecked : boolean


  onEdit() {
    this.editorMode = true;
  }
  editCompleted(){
    this.editorMode=false;
  }

  onDelete() {
    this.deleteInit.emit();
  }
  isCheckValue(checked:Event){
      this.currentTask.assigned = !this.currentTask.assigned;
      console.log(this.currentTask.assigned)
  }

}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "../create-task/task.model";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
@Input() taskToEdit:Task
  @Output() edited = new EventEmitter<void>();
  onEdit(){
    this.edited.emit();
  }
}

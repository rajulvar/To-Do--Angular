export class Task{
  public taskName:string;
  public taskType:string;
  public assignedDate:string;
  public assigned: boolean;
  constructor(taskName:string, taskType:string, assignedDate:string) {
    this.taskName= taskName;
    this.taskType= taskType;
    this.assignedDate = assignedDate;
    this.assigned = false;
  }
}

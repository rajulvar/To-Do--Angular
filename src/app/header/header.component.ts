import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() clear = new EventEmitter<void>();
  @Output() selectedClear = new EventEmitter<void>();
onClear(){
  this.clear.emit();
}
onSelectedClear(){
  this.selectedClear.emit();
}
}

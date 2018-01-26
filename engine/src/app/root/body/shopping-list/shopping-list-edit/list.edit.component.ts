import { Component } from '@angular/core';

@Component({
  selector: 'app-list-edit-tag',
  templateUrl: './list.edit.component.html',
  styleUrls: ['./list.edit.component.css']
})
export class ListEditComponent {

  content: Date = new Date();
  id: Number = this.content.getMilliseconds();
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent implements OnInit {
 @Input() name: string|undefined;//added the property name
  constructor(){
    // this.name = "Masood";//set the property value
  }

  ngOnInit(): void {
  }

}

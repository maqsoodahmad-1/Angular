import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log("Adding article tilte:" ,(title.value),"add link:",(link.value));
    return false;
  }
}

import { Component } from '@angular/core';

@Component({
 selector: 'my-app',
 templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'my-angular2-project';

 constructor(){
   console.log("I am Angular!")
 }
}
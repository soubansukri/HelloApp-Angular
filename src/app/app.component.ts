import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  imgUrl="";
  ngOnInit():void{
    this.title="Hello from Bridgelabz"
    this.imgUrl="assets/images/BridgeLabzImage.jpg";
  }
}

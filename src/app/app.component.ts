import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  imgUrl="";
  url: string | URL | undefined;
  userName:String="";
  ngOnInit():void{
    this.title="Hello from Bridgelabz"
    this.imgUrl="assets/images/BridgeLabzImage.jpg";
    this.url="https://www.bridgelabz.com";
  }

  onClick($event: any){
    console.log("Save button is clicked",$event);
    window.open(this.url,"_blank")
  }
}

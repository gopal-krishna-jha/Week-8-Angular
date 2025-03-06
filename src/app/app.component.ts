import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Create a variable title
  title = 'HelloWorld';

  //Create a variable to store url
  imgUrl = "../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";

  //Create variable 
  userName: string ="";

  nameError: string = "";

  //Create a function
  ngOnInit(): void {
    this.title = "Hello From BridgeLabz!";
  }

  //Create a function
  onClick($event: any){
    console.log("Save Button is Clicked!",$event);
    window.open(this.url,"_blank");
  }

  //Create a function
  onInput($event:any){
    console.log("Change Event Occurred!",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError ="";
      return
    }
    this.nameError = "Name is Incorrect!";
  }
}
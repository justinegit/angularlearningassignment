import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title= 'LEARNING ASSIGNMENT'
  loginForm = new FormGroup({
    user:new FormControl(''),
    password: new FormControl(''),
  })
  currentservice="Backend";
  services = ['Web','App Devolopment','E-commerce solutions','ERP Solutions'];

  
  data = {
    firstname:'',
    lastname:'',
    phone:'',
    email:'',
  }


  
  addService(newService : string ){
    this.services.push(newService);
    
  }
}


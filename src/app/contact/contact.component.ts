import { Component, OnInit } from '@angular/core';
import { ContactService, ContactData } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 52.4064;
  lng: number = 16.9252;


  public name: string;
  public email: string;
  public message: string;

  public isEmailInvalid: boolean;
  public isNameInvalid: boolean;
  public service: ContactService

  constructor(service: ContactService) {
    this.service = service;

    const data: ContactData = this.service.getContactData();
    ///data wartosci null/undifined/false
    if (data){
    this.name=data.name;
    this.email=data.email;
    this.message=data.message;
    } else {
    this.name='';
    this.email='';
    this.message='';
    }

    console.log(this)
    
   }

  ngOnInit() {}

  public emailChanged(): void {
    this.validateEmail();
    this.validateName();
  }
  
  public formSubmit(): void {
    this.validateEmail();
    this.validateName();

    if(!this.isNameInvalid || !this.isEmailInvalid){ ///rownoznaczne gdy zamiast ! stosujemy else i this.service
      this.service.saveContactData(
        this.name,
        this.email,
        this.message,
      )
    }
  }

  private validateName(): void {
    if (this.name.length >0 && /[a-z]+/.test(this.name)) {
      this.isNameInvalid = false;}
    else{
      this.isNameInvalid = true;
    }}

private validateEmail(): void {
  if (this.email.length >0 && /[a-z]@[a-z]+/.test(this.email)) {
    this.isEmailInvalid = false;}
  else{
    this.isEmailInvalid = true;
  }


console.log(
      'name',this.name,
      'email', this.email,
      'message',this.message,
    )
}}


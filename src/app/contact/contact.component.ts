import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({ 
    templateUrl: 'contact.component.html'
 })

export class ContactComponent {
    contactForm: FormGroup;
    
    recepient = 'duy.dinhcs@gmail.com';

    constructor() {
        this.createForm();
    }
   
    createForm() {
        this.contactForm = new FormGroup({
            name: new FormControl (''),
            email: new FormControl ('', [Validators.required, Validators.email]),
            comment:new FormControl ('', [Validators.required])
        })
    
    }
    onClickSubmit () {

            alert('Thank you for contacting us! ' + this.contactForm.value.name);
           
            this.contactForm.reset();
        
       
    }

      ngOnInit() {
         
      }

}
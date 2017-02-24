import {Component} from '@angular/core';
import { Contact } from '../models/contact.model';
import {FormPoster} from '../services/form-poster.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html' 
})
export class HomeComponent {
  states = ['FCT','ABIA','ADAMAWA','AKWA IBOM','ANAMBRA','BAUCHI','BAYELSA','BENUE','BORNO','CROSS RIVER','DELTA','EBONYI','EDO','EKITI',
'ENUGU','GOMBE','IMO','JIGAWA','KADUNA','KANO','KATSINA','KEBBI','KOGI','KWARA','LAGOS','NASSARAWA','NIGER','OGUN','ONDO','OSUN',
'OYO','PLATEAU','RIVERS','SOKOTO','TARABA','YOBE','ZAMFARA'];
    
  model= new Contact('', '', '', '','');
         constructor(private formPoster: FormPoster) {
                     
}
submitForm(form:  NgForm){
   this.formPoster.postContactForm(this.model)
   .subscribe(
     data => console.log('success: ', data),
     err => console.log('error: ', err)
   )
}
}


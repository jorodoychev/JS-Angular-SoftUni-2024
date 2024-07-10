import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  professions = ['Designer', 'Developer', 'Tester']; // replace this with your actual options
  selectedProfession = 'Developer';
  countryCodes = ['+359', '+123', '+856'];
  selectedCountryCodes = '+359';

  @ViewChild('registrationForm') registrationForm: NgForm | undefined;


  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Registration successful. Form data:', form.value);
      form.reset()
    } else {
      console.log('Form is not valid');
    }
  }
}

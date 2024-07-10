import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form-reactive',
  templateUrl: './register-form-reactive.component.html',
  styleUrls: ['./register-form-reactive.component.css']
})
export class RegisterFormReactiveComponent {
  registrationForm: FormGroup;

  professions = ['Designer', 'Developer', 'Tester']; // replace this with your actual options
  selectedProfession = 'Developer';
  countryCodes = ['+359', '+123', '+856'];
  selectedCode = '+359';

  validateImageUrl(control: FormControl) {
    let url = control.value;
    let urlPattern = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,5}[.]{0,1}/;
    let jpgPattern = /\.jpg$/;
    return (urlPattern.test(url) && jpgPattern.test(url)) ? null : {'incorrect': true};
  }


  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern("[A-Z][a-z]*( [A-Z][a-z]*)")]],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      phone: ['', [Validators.required, Validators.pattern("^\\d{9}$")]],
      imageUrl: ['', [Validators.required, (this.validateImageUrl)]],
      profession: [''],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]{3,16}")]],
        repassword: ['', Validators.required]
      }, {validator: this.passwordsMatchValidator})

    });

  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('repassword')?.value;

    return password === confirmPassword ? null : {passwordsNotMatching: true};
  }


  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
      this.registrationForm.reset()
    } else {
      console.log('Form is invalid');
    }
  }
}

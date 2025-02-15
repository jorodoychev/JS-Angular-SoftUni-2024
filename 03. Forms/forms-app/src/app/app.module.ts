import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ImageUrlValidatorDirective} from './image-url-validator.directive';
import {RegisterFormReactiveComponent} from './register-form-reactive/register-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    ImageUrlValidatorDirective,
    RegisterFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

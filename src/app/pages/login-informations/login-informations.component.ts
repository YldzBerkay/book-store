import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-login-informations',
  templateUrl: './login-informations.component.html',
  styleUrls: ['./login-informations.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class LoginInformationsComponent implements OnInit{
  submitted = false;
  maxDate : Date;

  informationForm = new UntypedFormGroup({
    name: new UntypedFormControl('', [
        Validators.required,
    ]),
    surname: new UntypedFormControl('', [
        Validators.required,
    ]),
    birthday: new UntypedFormControl('', [
      Validators.required,
  ]),
});

  constructor() { 
    const today = new Date();
    this.maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  }

  ngOnInit(): void {}

  loginInformationAnimation: Record<string, any> = {
    path: '/assets/json/login_information_animation.json', // Path to your animation JSON file
    renderer: 'svg', // Use 'canvas' or 'html' for different renderers
    loop: true,
    autoplay: true,
  };

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  onSubmit(): void {
    this.submitted = true;
    console.log(this.informationForm.value);
  }
}

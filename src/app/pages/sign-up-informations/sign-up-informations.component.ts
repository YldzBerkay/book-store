import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-informations',
  templateUrl: './sign-up-informations.component.html',
  styleUrls: ['./sign-up-informations.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SignUpInformationsComponent implements OnInit{
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

  constructor(private router:Router, private authService: AuthService) { 
    const today = new Date();
    this.maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  }

  ngOnInit(): void {}

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
    this.authService.additinalFields(this.informationForm.value.name, this.informationForm.value.surname, this.informationForm.value.birthday).then(
      (res) => {
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

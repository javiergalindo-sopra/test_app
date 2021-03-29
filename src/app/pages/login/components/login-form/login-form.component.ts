import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public remindPassword = false;

  public formGroup: FormGroup;
  private readonly ngUnsubscribe = new Subject<void>();

  constructor() {}

  ngOnInit() {
    this.setupFormControl();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  setupFormControl() {
    const commonValidators = [Validators.required];
    const emailValidators = [...commonValidators, Validators.email];
    const passValidators = [...commonValidators, Validators.minLength(5)];

    this.formGroup = new FormBuilder().group({
      email: new FormControl('', emailValidators),
      pass: new FormControl('', passValidators),
      remind: new FormControl(false),
    });

    this.formGroup.valueChanges.pipe(takeUntil(this.ngUnsubscribe));
  }

  submitForm() {
    if (this.formGroup.valid) {
      console.log('OK');
    } else {
      console.log('TRY AGAIN');
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  register!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  registerUser() {
    if (this.register.invalid) {
      return;
    }

    const { email, password } = this.register.value;
    this.auth
      .register(email, password)
      .then((response) => {
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => console.log(err));
  }

  logIn() {
    if (this.register.invalid) {
      return;
    }

    const { email, password } = this.register.value;
    this.auth
      .logIn(email, password)
      .then((response) => {
        this.router.navigate(['/dashboard']);
      })
      .catch((err) => console.log(err));
  }
}

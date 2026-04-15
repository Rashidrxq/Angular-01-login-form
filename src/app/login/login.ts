import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';
  message = '';

  onLogin() {
    if (this.username === 'admin' && this.password === '123456') {
      this.message = 'Login Successful';
    } else {
      this.message = 'Invalid Credentials';
    }
  }
}
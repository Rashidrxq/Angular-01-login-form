import { Component } from '@angular/core';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login],   // ✅ VERY IMPORTANT
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
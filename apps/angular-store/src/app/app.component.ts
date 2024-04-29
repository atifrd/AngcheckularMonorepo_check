import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-store';
  constructor(private router: Router) {
  }


  // onRClick(): void {
  //   //this.router.navigateByUrl(`http://localhost:56663/`);
  //   localStorage.setItem('dataSource', 'salaaaaaaaam az angular app');
  //   alert('hi')
  // }
}

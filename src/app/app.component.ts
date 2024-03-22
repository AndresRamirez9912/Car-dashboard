import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'peluche';

  constructor(private auth: AuthService) {}

  ngOnDestroy(): void {
    this.auth
      .logOut()
      .then(() => console.log('Success Log Out'))
      .catch((err) => console.log(err));
  }
}

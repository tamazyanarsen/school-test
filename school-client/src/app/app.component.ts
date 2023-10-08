import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'school-client';
  constructor(private http: HttpClient) {
    this.http.get('/api/test')
      .pipe(catchError(err => {
        console.log(err)
        return of({ err: true })
      }))
      .subscribe(console.log)
  }
}

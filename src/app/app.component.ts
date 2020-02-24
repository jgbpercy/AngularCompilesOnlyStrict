import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Thinger {
  innerObs: Observable<Wotsit>;
}

interface Wotsit {
  doDar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  thingers: Observable<Thinger[]> = of([
    {
      innerObs: of({ doDar: 'do-dar' }),
    },
    {
      innerObs: of({ doDar: 'hello sailor' }),
    },
  ]);
}

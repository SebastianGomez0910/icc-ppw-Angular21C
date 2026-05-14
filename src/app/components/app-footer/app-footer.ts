import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe],
  templateUrl: './app-footer.html',
  styleUrl:'./app-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooter {
  readonly nombre=signal('plataformas web');
  readonly universidad=signal('Universidad Politecnica Salesiana');
  readonly precio=signal(25);
  readonly fecha=signal(new Date());
}

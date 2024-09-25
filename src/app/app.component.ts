import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeTransactionsComponent } from './liste-transactions/liste-transactions.component';
import { CommonModule } from '@angular/common';
import { HeureComponent } from './heure/heure.component';
import { interval, map, Observable, share, shareReplay, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ListeTransactionsComponent,
    HeureComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  time = new Date();
  rxTime = new Date();
  subscription: Subscription | undefined;
  
  ngOnInit() {

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

}

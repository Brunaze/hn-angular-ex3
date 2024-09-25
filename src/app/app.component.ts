import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeTransactionsComponent } from './liste-transactions/liste-transactions.component';
import { CommonModule } from '@angular/common';
import { HeureComponent } from './heure/heure.component';

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
export class AppComponent {
  // currentTime: Date = new Date();
  // private intervalId: any;

  // ngOnInit() {
  //   // Met à jour l'heure toutes les secondes
  //   this.intervalId = setInterval(() => {
  //     this.currentTime = new Date();
  //   }, 1000);
  // }

  // ngOnDestroy() {
  //   // Nettoie l'intervalle quand le composant est détruit
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

}

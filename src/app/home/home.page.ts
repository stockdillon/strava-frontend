import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './../services/activities.service';
import { Observable } from 'rxjs';
import { Activity } from 'dto/';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  activities$: Observable<Activity[]>;

  constructor(
    private activities: ActivitiesService,
  ) {
  }

  ngOnInit(): void {
    this.activities$ = this.activities.get().pipe(
      share()
    );
  }
}

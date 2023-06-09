import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PlannerService } from 'src/app/core/services';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlannerComponent implements OnInit, OnDestroy {
  private _stop$: Subject<any>;

  focusedTabIndex: number;

  constructor(
    private readonly _cdRef: ChangeDetectorRef,
    private readonly _plannerService: PlannerService
  ) {
    this._setVariables();
  }

  ngOnInit(): void {
    this.getUpcomingMatches();
    this.getNotes();
    this.getPredictions();
    this.getStrategies();
    this.getStrategyMatches();
    this.getFavouriteMatches();
    this.getLeagues();
    this.getAlertsHistory();
    this.getSampleStrategies();
  }

  ngOnDestroy(): void {
    this._stop$.next();
    this._stop$.complete();
  }

  private _setVariables(): void {
    this._stop$ = new Subject();
    this.focusedTabIndex = 0;
  }

  getUpcomingMatches(): void {
    this._plannerService
      .getUpcomingMatches()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {
        this.focusedTabIndex = 0;
        this._cdRef.detectChanges();
      });
  }

  getNotes(): void {
    this._plannerService
      .getNotes()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {});
  }

  getPredictions(): void {
    this._plannerService
      .getPredictions()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {});
  }

  getStrategies(): void {
    this._plannerService
      .getStrategies()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {});
  }

  getStrategyMatches(): void {
    this._plannerService
      .getStrategyMatches()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {});
  }

  getFavouriteMatches(): void {
    this._plannerService
      .getFavouriteMatches()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {});
  }

  getLeagues(): void {
    this._plannerService
      .getLeagues()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {});
  }

  getAlertsHistory(): void {
    this._plannerService
      .getAlertsHistory()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {});
  }

  getSampleStrategies(): void {
    this._plannerService
      .getSampleStrategies()
      .pipe(takeUntil(this._stop$))
      .subscribe(() => {});
  }

  onChangeSelectedTab($event): void {

  }

  onAnimationDone(): void {
    this._cdRef.detectChanges();
  }

  onFocusChange($event): void {

  }

  get tabTitle(): string {
    return this.focusedTabIndex === 0 ? 'Upcoming Events' : 'Strategy';
  }
}

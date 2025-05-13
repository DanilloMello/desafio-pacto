import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
  standalone: false
})
export class LayoutComponent {
  isLoading$: Observable<boolean>; // Define the property

  private loadingSubject = new BehaviorSubject<boolean>(false); // Create a BehaviorSubject

  constructor() {
    this.isLoading$ = this.loadingSubject.asObservable(); // Expose it as an observable
  }

  // Example: Simulate loading state
  setLoadingState(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }
}

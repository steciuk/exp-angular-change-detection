import { CHANGE_DETECTION } from 'src/app/config';
import { LoggerService } from 'src/app/services/logger.service';

import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: CHANGE_DETECTION,
})
export class AppComponent {
	noop: boolean;

	@ViewChild('logResultsBtn') logResultsBtn!: ElementRef;

	constructor(private readonly loggerService: LoggerService, private readonly ngZone: NgZone) {
		this.noop = !(ngZone instanceof NgZone);
	}

	ngDoCheck() {
		this.loggerService.startCycle();
	}

	ngAfterViewChecked() {
		this.loggerService.endCycle();
	}

	switchZones() {
		const key = 'ng-zone';
		if (localStorage.getItem(key)) {
			localStorage.removeItem(key);
		} else {
			localStorage.setItem(key, 'true');
		}

		window.location.reload();
	}

	ngAfterViewInit() {
		if (!this.noop) {
			this.ngZone.runOutsideAngular(() => {
				this.logResultsBtn.nativeElement.addEventListener('click', () => {
					this.loggerService.logResults();
				});
			});
		} else {
			this.logResultsBtn.nativeElement.addEventListener('click', () => {
				this.loggerService.logResults();
			});
		}
	}
}

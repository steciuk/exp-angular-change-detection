import { CHANGE_DETECTION } from 'src/app/Config';
import { LoggerService } from 'src/app/services/logger.service';

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: CHANGE_DETECTION,
})
export class AppComponent {
	constructor(private readonly loggerService: LoggerService) {}

	ngDoCheck() {
		this.loggerService.startCycle();
	}

	// ngOnChanges() {
	// 	console.log('OnChanges');
	// }

	// ngOnChecked() {
	// 	console.log('OnCheck');
	// }

	// ngAfterContentInit() {
	// 	console.log('AfterContentInit');
	// }

	// ngAfterContentChecked() {
	// 	console.log('AfterContentChecked');
	// }

	// ngAfterViewInit() {
	// 	console.log('AfterViewInit');
	// }

	ngAfterViewChecked() {
		this.loggerService.endCycle();
	}

	// ngOnDestroy() {
	// 	console.log('OnDestroy');
	// }
}

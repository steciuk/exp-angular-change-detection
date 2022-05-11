import { CHANGE_DETECTION } from 'src/app/Config';

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: CHANGE_DETECTION,
})
export class AppComponent {
	ngDoCheck() {
		console.log('DoCheck');
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
		console.log('AfterViewChecked');
	}

	// ngOnDestroy() {
	// 	console.log('OnDestroy');
	// }
}
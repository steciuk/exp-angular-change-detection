import { getTotalNumOfComponents } from 'src/app/utils';

import { Injectable, NgZone } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoggerService {
	private start: number = 0;
	private end: number = 0;
	private componentsRendered = new Map<string, number>();

	constructor(private readonly ngZone: NgZone) {
		console.log('Number of components', getTotalNumOfComponents());
	}

	startCycle(): void {
		this.componentsRendered = new Map<string, number>();
		this.start = performance.now();
	}

	endCycle(): void {
		console.log('-----------------------');
		const cycleTime = performance.now() - this.start;
		console.log('Main cycle took', Math.round(cycleTime), 'ms');
	}

	notifyOfRender(componentId: string) {
		const timesRendered = this.componentsRendered.get(componentId);
		if (timesRendered) {
			this.componentsRendered.set(componentId, timesRendered + 1);
		} else {
			this.componentsRendered.set(componentId, 1);
		}
	}

	logResults(): void {
		let numComponentsRendered = 0;
		let totalRenders = 0;

		console.log('Results for last cycle: ');
		console.groupCollapsed('Rendered components');
		this.componentsRendered.forEach((timesRendered, componentId) => {
			console.log(componentId, 'rendered', timesRendered, 'times');
			totalRenders += timesRendered;
			numComponentsRendered++;
		});
		console.groupEnd();
		console.log('Rendered', numComponentsRendered, 'components');
		console.log('Total renders:', totalRenders);
		console.log('-----------------------');
	}
}

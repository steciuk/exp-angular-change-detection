import { getTotalNumOfComponents } from 'src/app/NumOfNodes';

import { Injectable, NgZone } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoggerService {
	private start: number = 0;
	private componentsRendered = new Map<string, number>();
	private isMainCycle = false;

	constructor(private readonly ngZone: NgZone) {
		console.log('Number of components', getTotalNumOfComponents());
	}

	startCycle(): void {
		this.isMainCycle = true;
		this.componentsRendered = new Map<string, number>();
		this.start = performance.now();
	}

	endCycle(): void {
		this.isMainCycle = false;
		const cycleTime = performance.now() - this.start;
		let numComponentsRendered = 0;

		console.log('-----------------------');
		console.log('Cycle took', Math.round(cycleTime), 'ms');
		console.log('Rendered', numComponentsRendered, 'components');

		console.groupCollapsed('Rendered components');
		this.componentsRendered.forEach((timesRendered, componentId) => {
			console.log(componentId, 'rendered', timesRendered, 'times');
			numComponentsRendered++;
		});
		console.groupEnd();
		console.log('-----------------------');
	}

	notifyOfRender(componentId: string) {
		if (this.isMainCycle) {
			const timesRendered = this.componentsRendered.get(componentId);
			if (timesRendered) {
				this.componentsRendered.set(componentId, timesRendered + 1);
			} else {
				this.componentsRendered.set(componentId, 1);
			}
		} else {
			console.log('Rendered', componentId, 'after root cd cycle');
		}
	}
}

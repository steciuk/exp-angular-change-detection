import {
	DELAY_IN_COMPONENTS_RENDER,
	NUMBER_OF_COMPONENTS_IN_LAYER,
	NUMBER_OF_LAYERS
} from 'src/app/config';
import { LoggerService } from 'src/app/services/logger.service';

import { Component } from '@angular/core';

@Component({
	template: '',
})
export abstract class BaseComponent {
	numberOfLayers = NUMBER_OF_LAYERS;

	abstract layerNumber: number;
	abstract parentId?: string;
	abstract numberInLayer: number;
	abstract value: number;

	numTimesRendered = 0;
	id = '';

	lowerLayerNumber!: number;
	lowerLayerValueObject = 0;

	constructor(private readonly loggerService: LoggerService) {}

	numOfComponentsArray = Array(NUMBER_OF_COMPONENTS_IN_LAYER)
		.fill(0)
		.map((x, i) => i + 1);

	ngOnInit() {
		this.id = (this.parentId ? this.parentId + '-' : '') + this.numberInLayer;
		this.lowerLayerNumber = this.layerNumber + 1;
	}

	render(): string {
		if (DELAY_IN_COMPONENTS_RENDER > 0) this.wait(DELAY_IN_COMPONENTS_RENDER);

		this.numTimesRendered++;
		this.loggerService.notifyOfRender(this.id);
		return '';
	}

	setChildValue(): void {
		this.lowerLayerValueObject = Math.random();
	}

	setSelfValue(): void {
		this.value = Math.random();
	}

	private wait(ms: number): void {
		const start = Date.now();
		let now = start;
		while (now - start < ms) {
			now = Date.now();
		}
	}
}

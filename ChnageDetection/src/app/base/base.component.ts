import {
	NUMBER_OF_COMPONENTS_IN_LAYER,
	NUMBER_OF_LAYERS
} from 'src/app/Config';
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
	abstract valueObject: { value: number };

	numTimesRendered = 0;
	id = '';

	lowerLayerNumber!: number;
	lowerLayerValueObject = { value: 0 };

	constructor(private readonly loggerService: LoggerService) {}

	numOfComponentsArray = Array(NUMBER_OF_COMPONENTS_IN_LAYER)
		.fill(0)
		.map((x, i) => i + 1);

	ngOnInit() {
		this.id = (this.parentId ? this.parentId + '-' : '') + this.numberInLayer;
		this.lowerLayerNumber = this.layerNumber + 1;
	}

	render(): string {
		this.numTimesRendered++;
		this.loggerService.notifyOfRender(this.id);
		return '';
	}

	emptyFunction(): void {}

	setChildValue(): void {
		this.lowerLayerValueObject = { value: Math.random() };
	}

	mutateChildValue(): void {
		this.lowerLayerValueObject.value = Math.random();
	}

	setSelfValue(): void {
		this.valueObject = { value: Math.random() };
	}

	mutateSelfValue(): void {
		this.valueObject.value = Math.random();
	}
}

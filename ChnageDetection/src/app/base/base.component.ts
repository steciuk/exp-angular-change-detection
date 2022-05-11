import {
	NUMBER_OF_COMPONENTS_IN_LAYER,
	NUMBER_OF_LAYERS
} from 'src/app/Config';

import { Component } from '@angular/core';

@Component({
	template: '',
})
export abstract class BaseComponent {
	numberOfLayers = NUMBER_OF_LAYERS;

	abstract layerNumber: number;
	abstract numberInLayer: number;
	abstract valueObject: { value: number };

	numTimesRendered = 0;

	lowerLayerNumber!: number;
	lowerLayerValueObject = { value: 0 };
	// abstract log(event: string, data: string): void;

	numOfComponentsArray = Array(NUMBER_OF_COMPONENTS_IN_LAYER)
		.fill(0)
		.map((x, i) => i + 1);

	printName(): string {
		this.numTimesRendered++;
		console.log('Rendered', `${this.layerNumber}-${this.numberInLayer}`, this.numTimesRendered);
		return '';
	}

	log(): void {
		console.log('Click!');
	}

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

	// ngOnChanges() {
	// 	this.log('OnChanges', this.name + '-' + this.number);
	// }

	ngOnInit() {
		this.lowerLayerNumber = this.layerNumber + 1;
		// this.log('OnInit', this.name + '-' + this.number);
	}

	// ngOnChecked() {
	// 	this.log('OnCheck', this.name + '-' + this.number);
	// }

	// ngAfterContentInit() {
	// 	this.log('AfterContentInit', this.name + '-' + this.number);
	// }

	// ngAfterContentChecked() {
	// 	this.log('AfterContentChecked', this.name + '-' + this.number);
	// }

	// ngAfterViewInit() {
	// 	this.log('AfterViewInit', this.name + '-' + this.number);
	// }

	// ngAfterViewChecked() {
	// 	this.log('AfterViewChecked', this.name + '-' + this.number);
	// }

	// ngOnDestroy() {
	// 	this.log('OnDestroy', this.name + '-' + this.number);
	// }
}

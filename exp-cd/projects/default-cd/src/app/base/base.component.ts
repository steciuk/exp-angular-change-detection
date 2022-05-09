import { Component } from '@angular/core';

@Component({
	template: '',
})
export abstract class BaseComponent {
	protected numViewRendered = 0;

	protected abstract name: string;
	abstract number: number;

	abstract log(event: string, data: string): void;

	printName(): void {
		this.log('View Rendered', this.name + ' ' + this.numViewRendered);
		this.numViewRendered++;
	}

	// ngOnChanges() {
	// 	this.log('OnChanges', this.name + '-' + this.number);
	// }

	// ngOnInit() {
	// 	this.log('OnInit', this.name + '-' + this.number);
	// }

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

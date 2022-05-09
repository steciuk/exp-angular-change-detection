import { BaseComponent } from 'projects/default-cd/src/app/base/base.component';

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent {
	name = 'App';
	number = 0;

	private numComponents = 1000;
	numOfComponents = Array(this.numComponents)
		.fill(0)
		.map((x, i) => i + 1);

	log(event: string, data: string): void {
		console.log(`%c${event} %c${data}`, 'color:green', 'color:white');
	}
}

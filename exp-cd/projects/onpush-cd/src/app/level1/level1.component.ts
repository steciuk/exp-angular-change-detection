import { BaseComponent } from 'projects/default-cd/src/app/base/base.component';

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-level1',
	templateUrl: './level1.component.html',
	styleUrls: ['./level1.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Level1Component extends BaseComponent {
	protected name = 'Level1';
	@Input() number!: number;

	log(event: string, data: string): void {
		console.log(`%c${event} %c${data}`, 'color:blue', 'color:white');
	}
}

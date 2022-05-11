import { BaseComponent } from 'src/app/base/base.component';
import { CHANGE_DETECTION } from 'src/app/Config';

import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss'],
	changeDetection: CHANGE_DETECTION,
})
export class ChildComponent extends BaseComponent {
	@Input() valueObject!: { value: number };
	@Input() layerNumber!: number;
	@Input() numberInLayer!: number;
}

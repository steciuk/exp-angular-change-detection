import {
	NUMBER_OF_COMPONENTS_IN_LAYER,
	NUMBER_OF_LAYERS
} from 'src/app/config';

export function getTotalNumOfComponents(): number {
	return (
		(Math.pow(NUMBER_OF_COMPONENTS_IN_LAYER, NUMBER_OF_LAYERS + 1) - 1) /
		(NUMBER_OF_COMPONENTS_IN_LAYER - 1)
	);
}

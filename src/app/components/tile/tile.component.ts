import { CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
	selector: 'app-tile',
	imports: [
		CdkDragPlaceholder,
		TooltipModule,
	],
	templateUrl: './tile.component.html',
	styleUrl: './tile.component.scss'
})
export class TileComponent {
	@Input() public title?: string;
	@Input() public image?: string;
}

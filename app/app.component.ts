import { Component } from '@angular/core';
import { LetterComponent } from './letter.component';

@Component({
	selector: 'brendan-app',
	template: `
		<input placeholder="Type Something Here" (keyup)="handleKeyup($event)">

		<div>
			<letter
				*ngFor="let char of letters.split(''); let i = index"
				[index]="i"
				[glyph]="char"
				[deg]="(180 * (i / (letters.length - 1))) - 90"
			></letter>
		</div>
	`,
	styles: [`
		div {
			background-image: url(http://i.imgur.com/KPVrxlQ.png);
			width: 100vw;
			height: 100vh;
			background-size: cover;
		}
		input {
			font-size:24;
			height:50px;
			width:300px;
		}
	`]
})
export class AppComponent {

	public letters: string = "";

	public handleKeyup(evt) {
		this.letters = evt.target.value;
	}

}

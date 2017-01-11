import { Component, Input } from "@angular/core";

@Component({
	selector: 'letter',
	template: `
		<span
			[style.color]="generateColor()"
			[style.transform]="'rotate(' + deg + 'deg)'"
		>{{glyph}}</span>`,
	styles: [`
		span {
			font-size: 5em;
			font-family: "Comic Sans MS", cursive, sans-serif;
			height: 200px;
			position: absolute;
			width: 50px;
			left: 50%;
			top: 20%;
			transform-origin: bottom center;
		}
	`]
})
export class LetterComponent {
	@Input() glyph: string;
	@Input() index: number;
	@Input() deg: number;

	private generateColor() {
		let frequency: number = .3;
		let red: number   = Math.floor(Math.sin(frequency * this.index + 0) * 127 + 128);
		let green: number = Math.floor(Math.sin(frequency * this.index + 2) * 127 + 128);
		let blue: number  = Math.floor(Math.sin(frequency * this.index + 4) * 127 + 128);
		return `rgb(${red}, ${green}, ${blue})`;
	}
}

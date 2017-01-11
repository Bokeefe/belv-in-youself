import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LetterComponent } from './letter.component';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ AppComponent, LetterComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

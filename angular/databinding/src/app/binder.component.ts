import {Component} from '@angular/core';

@Component({
	selector:"binder",
	templateUrl:"./binder.component.html"
})
export class Binder {
	welcomeText:string = "Hello Angular";
	clickMessage:string = "";
	eventMessage:string = "";
	
	youClicked() {
		this.clickMessage = "You called?"
	}

	onClickMe(value) {
		this.eventMessage = "Hello "+value;
	}
}
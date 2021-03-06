import {Component} from '@angular/core';
import {Car} from './car.model';
import {CarService} from './car.service';
import {Router} from '@angular/router';
@Component({
	selector:"carform",
	templateUrl:"./carform.component.html"
})
export class CarForm {
	car:Car;
	
	constructor(private _carService:CarService, private _router:Router) {
		this.car = new Car("",0,0);
	}	
		
	addCar() {
		this._carService.addCar(this.car).subscribe(
			response => console.log(response),
			error => console.log(error),
			() => console.log("post Complete")
		);
		this.car = new Car("",0,0);
		this._router.navigate(["/carlist"]);
	}
	
}
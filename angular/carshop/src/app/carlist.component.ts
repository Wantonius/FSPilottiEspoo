import {Component} from '@angular/core';
import {Car} from './car.model';
import {CarService} from './car.service';
@Component({
	selector:"carlist",
	templateUrl:"./carlist.component.html"
})
export class CarList {
	carList = [];
	
	constructor(private _carService:CarService) {
		this.getCars();
	}
	
	getCars() {
		this._carService.getCars().subscribe(
			data => this.carList = data,
			error => console.log(error),
			() => console.log("get Complete")
		);
	}

	removeCar(index:number) {
		this._carService.removeCar(index).subscribe(
			response => this.getCars(),
			error => console.log(error),
			() => console.log("delete complete")
		);
	}
}
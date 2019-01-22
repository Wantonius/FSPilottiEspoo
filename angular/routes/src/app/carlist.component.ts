import {Component} from '@angular/core';
import {Car} from './car.model';
import {CarService} from './car.service';
@Component({
	selector:"carlist",
	templateUrl:"./carlist.component.html"
})
export class CarList {
	carList:Car[];
	
	constructor(private _carService:CarService) {
		this.getCars();
	}
	
	getCars() {
		this.carList = this._carService.getCars();
	}

	removeCar(index:number) {
		this._carService.removeCar(index);
	}
}
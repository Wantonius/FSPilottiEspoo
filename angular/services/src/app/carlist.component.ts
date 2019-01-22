import {Component} from '@angular/core';
import {Car} from './car.model';
import {CarService} from './car.service';
@Component({
	selector:"carlist",
	templateUrl:"./carlist.component.html"
})
export class CarList {

	carList:Car[];
	car:Car;
	
	constructor(private _carService:CarService) {
		this.getCars();
		this.car = new Car("",0);
	}
	
	getCars() {
		this.carList = this._carService.getCars();
	}
	
	addCar() {
		this._carService.addCar(this.car);
		this.car = new Car("",0);
	}
	
	removeCar(index:number) {
		this._carService.removeCar(index);
	}
}
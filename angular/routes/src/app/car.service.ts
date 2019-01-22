import {Car} from './car.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CarService {

	carList:Car[] = [
		{type:"Ford",price:2000},
		{type:"Audi",price:10000},
		{type:"VW",price:10}	
	]
	
	getCars() {	
		return this.carList;
	}
	
	addCar(car:Car) {
		this.carList.push(car);
	}
	
	removeCar(index:number) {
		this.carList.splice(index,1);
	}
}
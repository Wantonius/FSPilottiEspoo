import {Car} from './car.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CarService {

	
	constructor(private http:HttpClient) {}
	
	getCars() {	
		return this.http.get<Car[]>("/api/cars");
	}
	
	addCar(car:Car) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type":"application/json"
			})
		}
		return this.http.post("/api/cars",
									car,
									httpOptions	);
	}
	
	removeCar(index:number) {
		return this.http.delete("/api/cars/"+index);

	}
}
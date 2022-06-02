import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cars } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class NgProxyService {

  constructor(private httpClient:HttpClient) { }

  getAllCars():any{
    var fullUrl:string = `http://localhost:3000/data`;
    return this.httpClient.get(fullUrl);
  }

  createCar(CarData:Cars){
    var fullUrl:string = `http://localhost:3000/data`;
    var headers = new HttpHeaders({'content-type':'application/json'})
    return this.httpClient.post(fullUrl,CarData,{headers:headers})
  }


  deleteCar(id:number){
    var fullUrl:string = `http://localhost:3000/data/${id}`;
    var jwt = JSON.parse(localStorage['jwt']).jwt
    var headers = new HttpHeaders()
    .set('authorize',`bearer${jwt}`);
    return this.httpClient.delete(fullUrl,{headers:headers})
  }

  updateCar(CarData:any,id:number):any{
    var fullUrl:string =`http://localhost:3000/data/${id}`;
    var jwt = JSON.parse(localStorage['jwt']).jwt;
    var headers = new HttpHeaders()
    .set('authorize',`bearer${jwt}`).set('content-type','application/json');
    return this.httpClient.put(fullUrl,CarData,{headers:headers})
  }

  getCarDataById(id:number):any{
    var fullUrl:string = `http://localhost:3000/data/${id}`;
    return this.httpClient.get(fullUrl);

  }
} 

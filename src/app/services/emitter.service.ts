import { Injectable,EventEmitter } from '@angular/core';

import { Cars } from '../models/car.model';
import { Update } from '../models/update.model';
import { NgProxyService } from './ng-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
    static carEmitter:any 
    public updateEmitter:EventEmitter<Update> = new EventEmitter();
  constructor(private proxy:NgProxyService) { }
}

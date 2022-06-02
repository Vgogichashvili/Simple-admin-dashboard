import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Update } from 'src/app/models/update.model';

import { Cars } from '../../models/car.model';
import { EmitterService } from '../../services/emitter.service';
import { NgProxyService } from '../../services/ng-proxy.service';


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})

export class DialogElementsExampleDialog implements OnInit {
 

cars:Cars = new Cars()
currentCarData:any = EmitterService.carEmitter;



formData!:Update;

  constructor(@Inject(MAT_DIALOG_DATA) public _data:any, public dialog: MatDialog, private emitter:EmitterService,private proxy:NgProxyService ){
  }
  ngOnInit(): void {
    let service = EmitterService.carEmitter;
    this.formData = new Update(
      service.id,
      service.VinCode,
      service.image,
      service.manufacturer,
      service.model,
      service.year,
      service.mile,
      service.price,
      service.phoneNumber,
      service.ariivesIn,
      service.driveTrainGeo,
      service.driveTrainEng,
      service.fuelTypeGeo,
      service.fuelTypeEng,
      service.transmissionGeo,
      service.transmissionEng)
  }

 


  onCreateBtnClick(){
    this.proxy.createCar(this.cars).subscribe((response:any) =>{
        console.log(response);
        localStorage['jwt']=JSON.stringify(response);
        this.cars = new Cars()
  
    })
   }


   updateCompanyService(){
    var updateData = new Update(
      this.formData.id,
      this.formData.VinCode,
      this.formData.image,
      this.formData.manufacturer,
      this.formData.model,
      this.formData.mile,
      this.formData.year,
      this.formData.price,
      this.formData.phoneNumber,
      this.formData.ariivesIn,
      this.formData.driveTrainGeo,
      this.formData.driveTrainEng,
      this.formData.fuelTypeGeo,
      this.formData.fuelTypeEng,
      this.formData.transmissionGeo,
      this.formData.transmissionEng
    )
    
    this.emitter.updateEmitter.emit(updateData);
  }
  


}

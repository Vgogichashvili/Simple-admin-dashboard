import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './dialog-elements-example-dialog/dialog-elements-example-dialog';
import { Cars } from '../models/car.model';
import { DialogService } from '../services/dialog.service';
import { EmitterService } from '../services/emitter.service';
import { NgProxyService } from '../services/ng-proxy.service';
import { Update } from '../models/update.model';


@Component({
  selector: 'app-app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.css']
})
export class AppTableComponent implements OnInit {
cars:Cars = new Cars()
  
displayedColumns?: string[] = [ 'image','manufacturer', 'model', 'year', "phoneNumber","mile","price"
,'delete','update'];
dataSource = [];

  constructor(private proxy:NgProxyService,
    private dialog:MatDialog,
    private dialogService:DialogService,private emitter:EmitterService) { }

  ngOnInit(): void {
   this.getTableData();
   this.emitter.updateEmitter.subscribe((response:any)=>{
     this.proxy.updateCar(response,response.id).subscribe((response:any) =>{
       if(response){
         this.getTableData();
       }
     })
   })
  }


  getTableData(){
    this.proxy.getAllCars().subscribe((response:any) =>{
      this.dataSource =response;
    }) 
  }


   onDeleteBtnClick(id:number){
     this.proxy.deleteCar(id).subscribe((response:any) =>{
        console.log(response);
        this.getTableData()
     })
   }

   openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  openUpdateService(id:number){
    this.proxy.getCarDataById(id).subscribe((response:any) =>{
      this.dialogService.openService('update');
      EmitterService.carEmitter = response;
    })
 }

  openCreateService(){
    this.dialogService.openService('create')
  }


  
}



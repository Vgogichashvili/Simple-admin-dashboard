import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialog } from '../app-table/dialog-elements-example-dialog/dialog-elements-example-dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }

  openService(openTrigger:'update'|'create'){
    this.dialog.open(DialogElementsExampleDialog,{data:{message:openTrigger}});
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  val: any;
  user : any
data:any
item:any
formData:any ={
  rating: {
    rate: null,
    count: null
},
}
constructor(
  public dialogRef: MatDialogRef<AddComponent>,
  @Inject(MAT_DIALOG_DATA) public dialogData: any
) {
  
}


  ngOnInit(): void {

   
  }
  
submitForm(): void{
  this.dialogRef.close(this.formData);
}
}


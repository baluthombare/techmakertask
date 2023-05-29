import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formData:any ={}
  item :any ={}
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    
  }
  
  

  ngOnInit(): void {
    this.item = { ...this.data.item };
  }
  submitForm(): void {
    if (this.item) {
      this.dialogRef.close(this.item);
    }
  }
}
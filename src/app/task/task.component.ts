import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskCompseronent implements OnInit {
  serviceService: any;

  constructor(private service:ServiceService, private router:Router ,public dilog:MatDialog) { }
data : any[]=[]
pageSize = 5; // Number of items to display per page
p = 1
searchData = "";
aa:any
ii:any
ratingData:any
item = ''
;
  ngOnInit(): void {
  
  this.service.apiData().subscribe(
  res => {
    this.data=res
    console.log(res);
    
  },
  error=>{
    console.error(error);
    
  }
  
  

  )
  this.loadData()

}
get pagedItems(): any[] {
  
  const startIndex = (this.p - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;

  return this.data.slice(startIndex, endIndex);
}

onPageChange(pageNumber: number): void {
  this.p = pageNumber;

}
// myFunction() {
//   if (!this.searchQuer) {
//     this.data = this.filteredData;
//   } else {
//     this.data = this.filteredData.filter(item =>
//       item.name.toLowerCase().includes(this.searchQuer.toLowerCase())
//     );
//   }
// }
setIndex(ii:any){
  this.aa=ii;
  console.log
}
search(searchTerm:string){
  if(searchTerm !== ''){
    this.serviceService.searchData(searchTerm)
     
      
  
  }

 

}
deleteRecord(item: any): void {

  const index = this.data.findIndex(i => i.id === item.id);
  if (index !== -1) {
    this.data.splice(index, 1); 
}

}

loadData(): void {
  this.data = this.service.getData();
}


openDialog(mode: string, index?: number): void {
  const dialogRef = this.dilog.open(AddComponent, {
    width: '400px',
    data: { mode: mode, data: index !== undefined ? { ...this.data[index] } : null },
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      if (mode === 'create') {
        this.data.push(result);
      } else if (mode === 'edit' && index !== undefined) {
        this.data[index] = result;
      }
      this.saveData();
    }
  });

}
openEditDialog(index: number): void {
  const dialogRef = this.dilog.open(EditComponent, {
    width: '400px',
    data: { mode: 'edit', index: index }
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      this.data[index] = result;
      this.saveData();
    }
  });

}










saveData(): void {
  // Save data to local storage
  localStorage.setItem('data', JSON.stringify(this.data));
}


}